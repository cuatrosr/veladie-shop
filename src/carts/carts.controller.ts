import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDecorator } from '../utils/decorators/user.decorator';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { Role } from '../utils/enums/role.enum';
import { CartsService } from './carts.service';
import { CartsDTO } from './dto/carts.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Carts')
@Controller('cart')
export class CartsController {
  constructor(private cartsService: CartsService) {}

  @Get()
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getCart(@UserDecorator() user: any) {
    return this.cartsService.findById(user.cart);
  }

  @Post()
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addProduct(@UserDecorator() user: any, @Body() cartsDTO: CartsDTO) {
    return this.cartsService.addProduct(user.cart, cartsDTO);
  }
}