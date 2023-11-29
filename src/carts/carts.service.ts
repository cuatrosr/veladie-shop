import {
  HttpMongoError,
  HttpNotFound,
} from '../utils/exceptions/http.exception';
import { Cart, CartDocument } from './schema/cart.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CartsDTO } from './dto/carts.dto';
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

  async findById(id: string): Promise<Cart> {
    return (
      (await this.cartModel
        .findById(id)
        .populate([
          {
            path: 'products',
            select: 'name description price ammount',
          },
        ])
        .exec()
        .catch(() => HttpMongoError(Cart.name))) || HttpNotFound(Cart.name)
    );
  }

  async addProduct(cart: string, cartsDTO: CartsDTO) {
    return await this.cartModel
      .findByIdAndUpdate(
        { _id: cart },
        { $addToSet: { products: cartsDTO.product } },
        { new: true },
      )
      .populate([
        {
          path: 'products',
          select: 'name description price ammount',
        },
      ])
      .exec()
      .catch(() => HttpMongoError(Cart.name));
  }
}
