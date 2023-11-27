import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Collection {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
