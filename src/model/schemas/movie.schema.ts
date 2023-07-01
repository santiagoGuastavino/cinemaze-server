import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectId } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({ timestamps: false, versionKey: false })
export class Movie {
  @Prop({
    type: String,
    required: true,
    nullable: false,
    unique: true,
  })
  title: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Genre' }],
    required: true,
    nullable: false,
  })
  genres: ObjectId[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Perfomer' }],
    required: false,
    nullable: true,
    default: [],
  })
  performers: ObjectId[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
