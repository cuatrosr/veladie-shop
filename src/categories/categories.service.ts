import { Category, CategoryDocument } from './schema/category.schema';
import { HttpMongoError } from 'src/utils/exceptions/http.exception';
import { CategoriesDTO } from './dto/categories.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(categoriesDTO: CategoriesDTO): Promise<Category> {
    return await new this.categoryModel(categoriesDTO)
      .save()
      .catch(() => HttpMongoError(Category.name));
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel
      .find()
      .exec()
      .catch(() => HttpMongoError(Category.name));
  }
}
