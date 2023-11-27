import { User, UserDocument } from './schema/user.schema';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  HttpMongoError,
  HttpNotFound,
} from 'src/utils/exceptions/http.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: RegisterDTO) {
    return this.userModel.create(user).catch(() => HttpMongoError(User.name));
  }

  async findByUsername(username: string) {
    return (
      (await this.userModel.findOne({ username: username })) ||
      HttpNotFound(User.name)
    );
  }
}
