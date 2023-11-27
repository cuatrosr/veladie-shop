import { Purchase, PurchaseSchema } from './schema/purchase.schema';
import { PurchasesService } from './purchases.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Purchase.name,
        schema: PurchaseSchema,
      },
    ]),
  ],
  providers: [PurchasesService],
  exports: [PurchasesService],
})
export class PurchasesModule {}
