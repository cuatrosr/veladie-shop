import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CartsDTO {
  @IsMongoId()
  @IsNotEmpty()
  product: string;
}
