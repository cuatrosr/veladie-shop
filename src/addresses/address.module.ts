import { Address, AddressSchema } from './schema/address.schema';
import { AddressService } from './address.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Address.name,
        schema: AddressSchema,
      },
    ]),
  ],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddresssModule {}
