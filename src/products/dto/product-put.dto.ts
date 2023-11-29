import { IsMongoId, IsNotEmpty } from 'class-validator';

export class ProductPutDTO {
  @IsMongoId()
  @IsNotEmpty()
  product: string;

  @IsMongoId()
  @IsNotEmpty()
  atr: string;
}
