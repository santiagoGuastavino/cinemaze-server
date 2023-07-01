import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectId } from 'mongodb';

export type PerformerDocument = Performer & Document;

@Schema({ timestamps: false, versionKey: false })
export class Performer {
  @Prop({
    type: String,
    required: true,
    nullable: false,
  })
  firstName: string;

  @Prop({
    type: String,
    required: true,
    nullable: false,
  })
  lastName: string;

  @Prop({
    type: String,
    required: true,
    nullable: false,
    unique: true,
  })
  fullName: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Movie' }],
    required: false,
    nullable: true,
    default: [],
  })
  movies: ObjectId[];
}

export const PerformerSchema = SchemaFactory.createForClass(Performer);
