import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../../products/schema/product.schema';
import { PurchaseState } from '../../utils/enums/purchase.enum';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { User } from '../../users/schema/user.schema';
import { Transform } from 'class-transformer';

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Purchase {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({
    required: true,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
  user: User;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  })
  products: Product[];

  @Prop({ required: true })
  total: number;

  @Prop({ type: String, enum: PurchaseState })
  state: PurchaseState;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
