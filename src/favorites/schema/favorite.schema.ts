import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../../products/schema/product.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type FavoriteDocument = HydratedDocument<Favorite>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Favorite {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  })
  products: Product[];
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
