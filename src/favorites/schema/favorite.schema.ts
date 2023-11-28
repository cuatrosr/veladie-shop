import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../../products/schema/product.schema';
import { Transform } from 'class-transformer';

export type FavoriteDocument = HydratedDocument<Favorite>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Favorite {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  @Transform(({ value }) =>
    value.map((objectId: ObjectId) => objectId.toString()),
  )
  products: Product[];
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
