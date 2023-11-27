import { Collection, CollectionSchema } from './schema/collection.schema';
import { CollectionsService } from './collections.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Collection.name,
        schema: CollectionSchema,
      },
    ]),
  ],
  providers: [CollectionsService],
  exports: [CollectionsService],
})
export class CollectionsModule {}
