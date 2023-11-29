import { IsNotEmpty, IsString } from 'class-validator';

export class CollectionsDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
