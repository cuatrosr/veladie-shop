import { Address, AddressSchema } from './schema/address.schema';
import { AddressController } from './address.controller';
import { UsersModule } from '../users/users.module';
import { AddressService } from './address.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      {
        name: Address.name,
        schema: AddressSchema,
      },
    ]),
  ],
  providers: [AddressService],
  controllers: [AddressController],
  exports: [AddressService],
})
export class AddresssModule {}
