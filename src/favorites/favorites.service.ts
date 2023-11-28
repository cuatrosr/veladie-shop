import { Favorite, FavoriteDocument } from './schema/favorite.schema';
import { HttpMongoError } from '../utils/exceptions/http.exception';
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
}
