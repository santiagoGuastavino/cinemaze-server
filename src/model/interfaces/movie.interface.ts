import { ObjectId } from 'mongodb';
import { IGenre } from './genre.interface';
import { IPerformer } from './performer.interface';

export interface IMovie {
  _id: ObjectId;
  title: string;
  genres: ObjectId[] | [];
  performers: ObjectId[] | [];
}

export interface IPopulatedMovie extends Omit<IMovie, 'genres' | 'performers'> {
  genres: IGenre[] | [];
  performers: IPerformer[] | [];
}
