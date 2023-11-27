import { Favorite, FavoriteSchema } from './schema/favorite.schema';
import { FavoritesService } from './favorites.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Favorite.name,
        schema: FavoriteSchema,
      },
    ]),
  ],
  providers: [FavoritesService],
  exports: [FavoritesService],
})
export class ProductsModule {}
