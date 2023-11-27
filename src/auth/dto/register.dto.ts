import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Gender } from '../../utils/enums/gender.enum';

export class RegisterDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsDate()
  @IsNotEmpty()
  birthDay: Date;
}
