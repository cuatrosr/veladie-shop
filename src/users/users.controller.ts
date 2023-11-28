import { UserDecorator } from '../utils/decorators/user.decorator';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from 'src/utils/decorators/roles.decorator';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from 'src/utils/enums/role.enum';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getProfile(@UserDecorator() user: any) {
    return user;
  }
}
