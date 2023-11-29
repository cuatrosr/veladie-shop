import {
  HttpMongoError,
  HttpNotFound,
} from '../utils/exceptions/http.exception';
import { Favorite, FavoriteDocument } from './schema/favorite.schema';
import { FavoritesDTO } from './dto/favorites.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name)
    private readonly favoriteModel: Model<FavoriteDocument>,
  ) {}

  async create(): Promise<Favorite> {
    return await new this.favoriteModel()
      .save()
      .catch(() => HttpMongoError(Favorite.name));
  }

  async findById(id: string): Promise<Favorite> {
    return (
      (await this.favoriteModel
        .findById(id)
        .populate([
          {
            path: 'products.id',
            select: 'name description price ammount',
          },
        ])
        .exec()
        .catch(() => HttpMongoError(Favorite.name))) ||
      HttpNotFound(Favorite.name)
    );
  }

  async addProduct(favorite: string, favoritesDTO: FavoritesDTO) {
    return await this.favoriteModel
      .updateOne(
        { _id: favorite },
        { $addToSet: { products: favoritesDTO.product } },
        { new: true },
      )
      .exec()
      .catch(() => HttpMongoError(Favorite.name));
  }
}
