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
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { Public } from 'src/utils/decorators/public.decorator';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { ProductPutDTO } from './dto/product-put.dto';
import { ProductsService } from './products.service';
import { Role } from '../utils/enums/role.enum';
import { ProductsDTO } from './dto/product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'Create product',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() productsDTO: ProductsDTO) {
    return this.productsService.create(productsDTO);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Get all products',
  })
  @Public()
  async findAll() {
    return this.productsService.findAll();
  }

  @Post('/color')
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Add color to product',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addColor(@Body() productPutDTO: ProductPutDTO) {
    return this.productsService.addColor(
      productPutDTO.product,
      productPutDTO.atr,
    );
  }

  @Post('/collection')
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Add collection to product',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addCollection(@Body() productPutDTO: ProductPutDTO) {
    return this.productsService.addCollections(
      productPutDTO.product,
      productPutDTO.atr,
    );
  }

  @Post('/categories')
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Add category to product',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addCategories(@Body() productPutDTO: ProductPutDTO) {
    return this.productsService.addCategories(
      productPutDTO.product,
      productPutDTO.atr,
    );
  }
}
