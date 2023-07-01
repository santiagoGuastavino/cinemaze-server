import { ObjectId } from 'mongodb';

export class SaveMovieDto {
  title: string;
  genres: ObjectId[];
  performers?: ObjectId[];

  constructor(title: string, genres: ObjectId[], performers?: ObjectId[]) {
    this.title = title;
    this.genres = genres;
    this.performers = performers;
  }
}
