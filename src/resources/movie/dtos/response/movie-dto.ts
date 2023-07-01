import { ObjectId } from 'mongodb';
import { GenreDto } from 'src/resources/genre/dtos/response/genre.dto';
import { PerformerDto } from 'src/resources/perfomer/dtos/response/performer.dto';

export class MovieDto {
  _id: ObjectId;
  title: string;
  genres: GenreDto[] | [];
  performers: PerformerDto[] | [];

  constructor(
    _id: ObjectId,
    title: string,
    genres: GenreDto[] | [],
    performers: PerformerDto[] | [],
  ) {
    this._id = _id;
    this.title = title;
    this.genres = genres;
    this.performers = performers;
  }
}
