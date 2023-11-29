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
import { ColorsService } from './colors.service';
import { Role } from '../utils/enums/role.enum';
import { ColorsDTO } from './dto/colors.dto';

@ApiTags('Colors')
@Controller('colors')
export class ColorsController {
  constructor(private colorsService: ColorsService) {}

  @Post()
  @HttpCode(200)
  @ApiOkResponse({
    description: "Product's color added",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() colorsDTO: ColorsDTO) {
    return this.colorsService.create(colorsDTO);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Get all colors',
  })
  @Public()
  async findAll() {
    return this.colorsService.findAll();
  }
}
