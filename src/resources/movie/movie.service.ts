import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateMovieDto } from './dtos/request/create-movie-dto';
import { ResponseDto, ResponseMessage } from 'src/common/dtos/response.dto';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from 'src/model/schemas/movie.schema';
import { IMovie, IPopulatedMovie } from 'src/model/interfaces/movie.interface';
import { AlreadyExistsException } from 'src/common/exceptions/already-exists.exception';
import { I18nContext } from 'nestjs-i18n';
import { SaveMovieDto } from './dtos/request/save-movie.dto';
import { MovieDto } from './dtos/response/movie-dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ) {}

  public async create(
    payload: CreateMovieDto,
    i18n: I18nContext,
  ): Promise<ResponseDto<object>> {
    const response = new ResponseDto<object>(
      HttpStatus.CREATED,
      ResponseMessage.CREATED,
    );

    const movieExists: IMovie | null = await this.findOne({
      title: payload.title,
    });
    if (movieExists) throw new AlreadyExistsException(i18n, 'movie');

    const newMovie = new SaveMovieDto(
      payload.title,
      payload.genres,
      payload.performers,
    );
    await this.insert(newMovie);

    return response;
  }

  public async getAll(): Promise<ResponseDto<MovieDto[]>> {
    const response = new ResponseDto<MovieDto[]>(
      HttpStatus.OK,
      ResponseMessage.OK,
    );

    const movies: IPopulatedMovie[] = await this.findAll();
    const responsePayload: MovieDto[] = movies.map(
      (movie: IPopulatedMovie) =>
        new MovieDto(movie._id, movie.title, movie.genres, movie.performers),
    );

    response.payload = responsePayload;

    return response;
  }

  private async findOne(filter: FilterQuery<Movie>): Promise<IMovie> {
    return await this.movieModel.findOne(filter).lean();
  }

  private async insert(payload: SaveMovieDto): Promise<void> {
    await this.movieModel.create(payload);
  }

  private async findAll(): Promise<IPopulatedMovie[]> {
    return await this.movieModel.find().lean();
  }
}
