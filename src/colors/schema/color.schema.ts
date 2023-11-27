import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type ColorDocument = HydratedDocument<Color>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Color {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  html: string;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
