import { HttpMongoError } from 'src/utils/exceptions/http.exception';
import { Color, ColorDocument } from './schema/color.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ColorsDTO } from './dto/colors.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ColorsService {
  constructor(
    @InjectModel(Color.name)
    private readonly colorModel: Model<ColorDocument>,
  ) {}

  async create(colorsDTO: ColorsDTO): Promise<Color> {
    return await new this.colorModel(colorsDTO)
      .save()
      .catch(() => HttpMongoError(Color.name));
  }

  async findAll(): Promise<Color[]> {
    return await this.colorModel
      .find()
      .exec()
      .catch(() => HttpMongoError(Color.name));
  }
}
