import MongooseClassSerializerInterceptor from '../utils/interceptors/mongooseClassSerializer.interceptor';
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LocalAuthGuard } from '../utils/guards/local/local-auth.guard';
import { Public } from '../utils/decorators/public.decorator';
import { User } from '../users/schema/user.schema';
import { RegisterDTO } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiBody({ type: [LoginDTO] })
  @ApiOkResponse({
    description: 'User Login to Get an Access Token',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: any) {
    return this.authService.login(req.user);
  }

  @Post('register')
  @HttpCode(201)
  @ApiBody({ type: [RegisterDTO] })
  @ApiOkResponse({
    description: 'User Registered',
  })
  @Public()
  async register(@Body() registerDTO: RegisterDTO) {
    return this.authService.register(registerDTO);
  }
}
