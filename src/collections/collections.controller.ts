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
import { CollectionsService } from './collections.service';
import { CollectionsDTO } from './dto/collections.dto';
import { Role } from '../utils/enums/role.enum';

@ApiTags('Collections')
@Controller('collections')
export class CollectionsController {
  constructor(private collectionsService: CollectionsService) {}

  @Post()
  @HttpCode(200)
  @ApiOkResponse({
    description: "Product's collections added",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() collectionsDTO: CollectionsDTO) {
    return this.collectionsService.create(collectionsDTO);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Get all collections',
  })
  @Public()
  async findAll() {
    return this.collectionsService.findAll();
  }
}
