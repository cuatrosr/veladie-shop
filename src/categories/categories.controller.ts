import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { Public } from 'src/utils/decorators/public.decorator';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { CategoriesDTO } from './dto/categories.dto';
import { Role } from '../utils/enums/role.enum';
import { CategoriesService } from './categories.service';

@ApiTags('Categories')
@Controller('categories')
export class CollectionsController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(200)
  @ApiOkResponse({
    description: "Product's category added",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() categoriesDTO: CategoriesDTO) {
    return this.categoriesService.create(categoriesDTO);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Get all categories',
  })
  @Public()
  async findAll() {
    return this.categoriesService.findAll();
  }
}
