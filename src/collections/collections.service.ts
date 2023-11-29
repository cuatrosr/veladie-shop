import { Collection, CollectionDocument } from './schema/collection.schema';
import { HttpMongoError } from 'src/utils/exceptions/http.exception';
import { CollectionsDTO } from './dto/collections.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection.name)
    private readonly collectionModel: Model<CollectionDocument>,
  ) {}

  async create(collectionsDTO: CollectionsDTO): Promise<Collection> {
    return await new this.collectionModel(collectionsDTO)
      .save()
      .catch(() => HttpMongoError(Collection.name));
  }

  async findAll(): Promise<Collection[]> {
    return await this.collectionModel
      .find()
      .exec()
      .catch(() => HttpMongoError(Collection.name));
  }
}
