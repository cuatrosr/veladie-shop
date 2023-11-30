import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AddresssModule } from './addresses/address.module';
import { PurchasesModule } from './purchases/purchases.module';
import { CategoriesModule } from './categories/categories.module';
import { CollectionsModule } from './collections/collections.module';
import { ColorsModule } from './colors/colors.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: `${config.get('database.host')}:${config.get(
          'database.port',
        )}/${config.get('database.name')}`,
      }),
    }),
    AuthModule,
    UsersModule,
    ColorsModule,
    ProductsModule,
    AddresssModule,
    PurchasesModule,
    CategoriesModule,
    CollectionsModule,
  ],
})
export class AppModule {}
