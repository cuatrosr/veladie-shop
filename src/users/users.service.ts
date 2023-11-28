import { FavoritesService } from '../favorites/favorites.service';
import { User, UserDocument } from './schema/user.schema';
import { RegisterDTO } from '../auth/dto/register.dto';
import { CartsService } from '../carts/carts.service';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  HttpMongoError,
  HttpNotFound,
} from 'src/utils/exceptions/http.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly cartsService: CartsService,
    private readonly favoritesService: FavoritesService,
  ) {}

  async create(user: RegisterDTO) {
    user.cart = (await this.cartsService.create())._id.toString();
    user.favorites = (await this.favoritesService.create())._id.toString();
    return await new this.userModel(user)
      .save()
      .catch(() => HttpMongoError(User.name));
  }

  async findByUsername(username: string) {
    return (
      (await this.userModel.findOne({ username: username }).exec()) ||
      HttpNotFound(User.name)
    );
  }
}
