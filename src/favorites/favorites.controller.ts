import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDecorator } from '../utils/decorators/user.decorator';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { FavoritesService } from './favorites.service';
import { FavoritesDTO } from './dto/favorites.dto';
import { Role } from '../utils/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getCart(@UserDecorator() user: any) {
    return this.favoritesService.findById(user.favorites);
  }

  @Post()
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addProduct(
    @UserDecorator() user: any,
    @Body() favoritesDTO: FavoritesDTO,
  ) {
    return this.favoritesService.addProduct(user.favorites, favoritesDTO);
  }
}
