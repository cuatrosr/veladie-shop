import { UsersService } from '../users/users.service';
import { User } from '../users/schema/user.schema';
import { RegisterDTO } from './dto/register.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      username: user.username,
      sub: user._id,
      roles: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(user: RegisterDTO) {
    user.password = await hash(user.password, 10);
    return await this.usersService.create(user);
  }
}
