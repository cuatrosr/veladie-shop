import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
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
import { PurchasesService } from './purchases.service';
import { PurchasesDTO } from './dto/purchases.dto';
import { Role } from '../utils/enums/role.enum';

@ApiTags('Purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private purchasesService: PurchasesService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'Create purchase',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@UserDecorator() user: any, @Body() purchasesDTO: PurchasesDTO) {
    return this.purchasesService.create(user.sub, purchasesDTO);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: "User's purchase",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async findAllByUser(@UserDecorator() user: any) {
    return this.purchasesService.findAllByUser(user.sub);
  }
}
