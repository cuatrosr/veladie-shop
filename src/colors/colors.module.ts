import { Color, ColorSchema } from './schema/color.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorsService } from './colors.service';
import { Module } from '@nestjs/common';
import { ColorsController } from './colors.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Color.name,
        schema: ColorSchema,
      },
    ]),
  ],
  providers: [ColorsService],
  controllers: [ColorsController],
  exports: [ColorsService],
})
export class ColorsModule {}
