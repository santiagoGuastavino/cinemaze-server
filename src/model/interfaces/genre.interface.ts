import { ObjectId } from 'mongodb';

export interface IGenre {
  _id: ObjectId;
  name: string;
}
