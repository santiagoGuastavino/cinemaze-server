import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { ObjectId } from 'mongodb';

export class CreateMovieDto {
  @IsString({ message: i18nValidationMessage('dto.IS_STRING') })
  @IsNotEmpty({ message: i18nValidationMessage('dto.IS_NOT_EMPTY') })
  title: string;

  @IsArray({ message: i18nValidationMessage('dto.IS_ARRAY') })
  @IsMongoId({ each: true, message: i18nValidationMessage('dto.IS_MONGO_ID') })
  @IsNotEmpty({ message: i18nValidationMessage('dto.IS_NOT_EMPTY') })
  genres: ObjectId[];

  @IsArray({ message: i18nValidationMessage('dto.IS_ARRAY') })
  @IsMongoId({ each: true, message: i18nValidationMessage('dto.IS_MONGO_ID') })
  @IsOptional()
  performers: ObjectId[];
}
