import { HttpMongoError } from '../utils/exceptions/http.exception';
import { Address, AddressDocument } from './schema/address.schema';
import { UsersService } from '../users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { AddressDTO } from './dto/address.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name)
    private readonly addressModel: Model<AddressDocument>,
    private readonly usersService: UsersService,
  ) {}

  async create(user: string, addressDTO: AddressDTO) {
    const address = await new this.addressModel(addressDTO)
      .save()
      .catch(() => HttpMongoError(Address.name));
    return await this.usersService.addAddress(user, address.id);
  }
}
