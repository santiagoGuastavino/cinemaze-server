import { Controller, HttpCode, HttpStatus, Post, Get } from '@nestjs/common';
import { GenreService } from './genre.service';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ResponseDto } from 'src/common/dtos/response.dto';
import { GenreDto } from './dtos/response/genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@I18n() i18n: I18nContext): Promise<ResponseDto<object>> {
    try {
      const response: ResponseDto<object> = await this.genreService.create(
        i18n,
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<ResponseDto<GenreDto[]>> {
    try {
      const response: ResponseDto<GenreDto[]> =
        await this.genreService.getAll();

      return response;
    } catch (error) {
      throw error;
    }
  }
}
