import { Collection } from '../../collections/schema/collection.schema';
import { Category } from '../../categories/schema/category.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Color } from '../../colors/schema/color.schema';
import { Size } from '../../utils/enums/size.enum';
import { Transform } from 'class-transformer';

export type ProductDocument = HydratedDocument<Product>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Product {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  recomendation: string;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  })
  categories: Category[];

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }],
  })
  colors: Color[];

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
  })
  collections: Collection[];

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  ammount: number;

  @Prop({ type: String, enum: Size })
  size: Size;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
