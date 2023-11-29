import { UserDecorator } from '../utils/decorators/user.decorator';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../utils/guards/jwt/jwt-auth.guard';
import { RolesGuard } from '../utils/guards/role/roles.guard';
import { Roles } from '../utils/decorators/roles.decorator';
import { AddressService } from './address.service';
import { Role } from '../utils/enums/role.enum';
import { AddressDTO } from './dto/address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async addAddress(@UserDecorator() user: any, @Body() addressDTO: AddressDTO) {
    return this.addressService.create(user.sub, addressDTO);
  }
}
