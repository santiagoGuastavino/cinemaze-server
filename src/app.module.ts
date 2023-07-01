import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { I18nModule } from './i18n/i18n.module';
import { MovieModule } from './resources/movie/movie.module';
import { GenreModule } from './resources/genre/genre.module';
import { PerformerModule } from './resources/perfomer/performer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB),
    I18nModule,
    MovieModule,
    GenreModule,
    PerformerModule,
  ],
})
export class AppModule {}
