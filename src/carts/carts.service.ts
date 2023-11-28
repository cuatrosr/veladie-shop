import { HttpMongoError } from '../utils/exceptions/http.exception';
import { Cart, CartDocument } from './schema/cart.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
  ) {}

  async create(): Promise<Cart> {
    return await new this.cartModel()
      .save()
      .catch(() => HttpMongoError(Cart.name));
  }
}
