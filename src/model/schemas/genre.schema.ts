import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenreDocument = Genre & Document;

@Schema({ timestamps: false, versionKey: false })
export class Genre {
  @Prop({
    type: String,
    required: true,
    nullable: false,
    unique: true,
  })
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
