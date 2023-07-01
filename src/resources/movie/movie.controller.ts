import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Get,
} from '@nestjs/common';
import { CreateMovieDto } from './dtos/request/create-movie-dto';
import { I18nContext, I18n } from 'nestjs-i18n';
import { ResponseDto } from 'src/common/dtos/response.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: CreateMovieDto,
    @I18n() i18n: I18nContext,
  ): Promise<ResponseDto<object>> {
    try {
      const response: ResponseDto<object> = await this.movieService.create(
        payload,
        i18n,
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<ResponseDto<MovieDto[]>> {
    try {
      const response: ResponseDto<MovieDto[]> =
        await this.movieService.getAll();
    } catch (error) {
      throw error;
    }
  }
}
