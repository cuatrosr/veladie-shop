import { Product, ProductSchema } from '../products/schema/product.schema';
import { Cart, CartSchema } from './schema/cart.schema';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsService } from './carts.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cart.name,
        schema: CartSchema,
      },
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [CartsService],
  controllers: [CartsController],
  exports: [CartsService],
})
export class CartsModule {}
