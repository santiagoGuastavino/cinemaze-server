import { ObjectId } from 'mongodb';
import { IMovie } from './movie.interface';

export interface IPerformer {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  fullName: string;
  movies: ObjectId[] | [];
}

export interface IPopulatedPerformer extends Omit<IPerformer, 'movies'> {
  movies: IMovie[] | [];
}
