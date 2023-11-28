import mongoose, { Types, HydratedDocument, ObjectId } from 'mongoose';
import { Favorite } from '../../favorites/schema/favorite.schema';
import { Address } from '../../addresses/schema/address.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Transform } from 'class-transformer';
import { Gender } from '../../utils/enums/gender.enum';
import { Cart } from '../../carts/schema/cart.schema';
import { Role } from '../../utils/enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class User {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Address.name }],
  })
  @Transform(({ value }) =>
    value.map((objectId: ObjectId) => objectId.toString()),
  )
  addresses: Address[];

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  phone: string;

  @Exclude()
  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: Role, default: Role.User })
  role: Role;

  @Prop({ type: String, enum: Gender })
  gender: Gender;

  @Prop({ require: true, type: mongoose.Schema.Types.Date })
  birthDay: Date;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Favorite.name }],
  })
  @Transform(({ value }) => value.toString())
  favorites: Favorite;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Cart.name }],
  })
  @Transform(({ value }) => value.toString())
  cart: Cart;

  @Prop({ default: true })
  @Exclude()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
