import {
  HttpMongoError,
  HttpNotFound,
} from 'src/utils/exceptions/http.exception';
import { Purchase, PurchaseDocument } from './schema/purchase.schema';
import { PurchasesDTO } from './dto/purchases.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectModel(Purchase.name)
    private readonly purchaseModel: Model<PurchaseDocument>,
  ) {}

  async create(user: string, purchasesDTO: PurchasesDTO) {
    purchasesDTO.user = user;
    return await new this.purchaseModel(purchasesDTO)
      .save()
      .catch(() => HttpMongoError(Purchase.name));
  }

  async findAllByUser(user: string) {
    return (
      (await this.purchaseModel
        .find({ user: user })
        .exec()
        .catch(() => HttpMongoError(Purchase.name))) ||
      HttpNotFound(Purchase.name)
    );
  }
}
