import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserDecorator } from '../utils/decorators/user.decorator';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { FavoritesService } from './favorites.service';
import { FavoritesDTO } from './dto/favorites.dto';
import { Role } from '../utils/enums/role.enum';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: "User's Favorites Details",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getFavorites(@UserDecorator() user: any) {
    return this.favoritesService.findById(user.favorites);
  }

  @Post()
  @HttpCode(200)
  @ApiOkResponse({
    description: "Add product to User's favorites",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addProduct(
    @UserDecorator() user: any,
    @Body() favoritesDTO: FavoritesDTO,
  ) {
    return this.favoritesService.addProduct(user.favorites, favoritesDTO);
  }
}
