import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Performer, PerformerSchema } from 'src/model/schemas/performer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Performer.name, schema: PerformerSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class PerformerModule {}
