import { FavoritesModule } from '../favorites/favorites.module';
import { User, UserSchema } from './schema/user.schema';
import { UsersController } from './users.controller';
import { CartsModule } from '../carts/carts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CartsModule,
    FavoritesModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
