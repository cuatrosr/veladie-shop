import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../../products/schema/product.schema';
import { CartState } from '../../utils/enums/cart.enum';
import { Transform } from 'class-transformer';

export type CartDocument = HydratedDocument<Cart>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Cart {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  @Transform(({ value }) =>
    value.map((objectId: ObjectId) => objectId.toString()),
  )
  products: Product[];

  @Prop({
    type: String,
    enum: CartState,
    default: CartState.Progress,
  })
  state: CartState;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
