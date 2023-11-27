import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongooseAutoPopulate from 'mongoose-autopopulate';
import configuration from './config/configuration';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

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
        connectionFactory: (connection) => {
          connection.plugin(mongooseAutoPopulate);
          return connection;
        },
      }),
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
