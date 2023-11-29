import { HttpMongoError } from 'src/utils/exceptions/http.exception';
import { Product, ProductDocument } from './schema/product.schema';
import { ProductsDTO } from './dto/product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(productsDTO: ProductsDTO) {
    return await new this.productModel(productsDTO)
      .save()
      .catch(() => HttpMongoError(Product.name));
  }

  async findAll() {
    return await this.productModel
      .find()
      .populate([
        {
          path: 'categories.id',
          select: 'name',
        },
      ])
      .populate([
        {
          path: 'colors.id',
          select: 'name html',
        },
      ])
      .populate([
        {
          path: 'collections.id',
          select: 'name',
        },
      ])
      .exec()
      .catch(() => HttpMongoError(Product.name));
  }

  async addColor(product: string, color: string) {
    return await this.productModel
      .updateOne(
        { _id: product },
        { $addToSet: { colors: color } },
        { new: true },
      )
      .exec()
      .catch(() => HttpMongoError(Product.name));
  }

  async addCategories(product: string, categories: string) {
    return await this.productModel
      .updateOne(
        { _id: product },
        { $addToSet: { categories: categories } },
        { new: true },
      )
      .exec()
      .catch(() => HttpMongoError(Product.name));
  }

  async addCollections(product: string, collections: string) {
    return await this.productModel
      .updateOne(
        { _id: product },
        { $addToSet: { collections: collections } },
        { new: true },
      )
      .exec()
      .catch(() => HttpMongoError(Product.name));
  }
}
