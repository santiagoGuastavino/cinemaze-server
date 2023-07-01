import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Genre } from 'src/model/schemas/genre.schema';
import { ResponseDto, ResponseMessage } from 'src/common/dtos/response.dto';
import { I18nContext } from 'nestjs-i18n';
import { IGenre } from 'src/model/interfaces/genre.interface';
import { SaveGenreDto } from './dtos/request/save-genre.dto';
import { AlreadyInitializedException } from './exceptions/already-initialized.exception';
import { genres } from './assets/genre.list';
import { GenreDto } from './dtos/response/genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre.name) private readonly genreModel: Model<Genre>,
  ) {}

  public async create(i18n: I18nContext): Promise<ResponseDto<object>> {
    const response = new ResponseDto<object>(
      HttpStatus.CREATED,
      ResponseMessage.CREATED,
    );

    const genresExist: IGenre[] | [] = await this.findAll();
    if (genresExist.length) throw new AlreadyInitializedException(i18n);

    for (const genre of genres) {
      const newGenre = new SaveGenreDto(genre);
      await this.insert(newGenre);
    }

    return response;
  }

  public async getAll(): Promise<ResponseDto<GenreDto[]>> {
    const response = new ResponseDto<GenreDto[]>(
      HttpStatus.OK,
      ResponseMessage.OK,
    );

    const genres: IGenre[] = await this.findAll();
    const responsePayload: GenreDto[] = genres.map(
      (genre: IGenre) => new GenreDto(genre._id, genre.name),
    );
    response.payload = responsePayload;

    return response;
  }

  private async findAll(): Promise<IGenre[]> {
    return await this.genreModel.find().lean();
  }

  private async insert(payload: SaveGenreDto): Promise<void> {
    await this.genreModel.create(payload);
  }

  private async findOne(filter: FilterQuery<Genre>): Promise<IGenre> {
    return await this.genreModel.findOne(filter).lean();
  }
}
