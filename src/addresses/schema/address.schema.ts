import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type AddressDocument = HydratedDocument<Address>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Address {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  neighborhood: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
