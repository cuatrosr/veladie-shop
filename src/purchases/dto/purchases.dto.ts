import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { PurchaseState } from 'src/utils/enums/purchase.enum';

export class PurchasesDTO {
  @IsMongoId()
  @IsOptional()
  user: string;

  @IsArray()
  @IsNotEmpty()
  @IsMongoId({ each: true })
  products: string[];

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsEnum(PurchaseState)
  @IsNotEmpty()
  state: PurchaseState;
}
