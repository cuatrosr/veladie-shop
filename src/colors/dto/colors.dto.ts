import { IsNotEmpty, IsString } from 'class-validator';

export class ColorsDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  html: string;
}
