import MongooseClassSerializerInterceptor from 'src/utils/interceptors/mongooseClassSerializer.interceptor';
import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { Role } from '../utils/enums/role.enum';
import { UsersService } from './users.service';
import { User } from './schema/user.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}
