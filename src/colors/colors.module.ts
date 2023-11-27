import { Color, ColorSchema } from './schema/color.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorsService } from './colors.service';
import { Module } from '@nestjs/common';

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
  exports: [ColorsService],
})
export class ColorsModule {}
