import { ObjectId } from 'mongodb';
import { MovieDto } from 'src/resources/movie/dtos/response/movie-dto';

export class PerformerDto {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  fullName: string;
  movies: MovieDto[] | [];

  constructor(
    _id: ObjectId,
    firstName: string,
    lastName: string,
    fullName: string,
    movies: MovieDto[] | [],
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = fullName;
    this.movies = movies;
  }
}
