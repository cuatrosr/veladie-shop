import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Size } from 'src/utils/enums/size.enum';

export class ProductsDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  recomendation: string;

  @IsArray()
  @IsNotEmpty()
  @IsMongoId({ each: true })
  categories: string[];

  @IsArray()
  @IsNotEmpty()
  @IsMongoId({ each: true })
  colors: string[];

  @IsArray()
  @IsNotEmpty()
  @IsMongoId({ each: true })
  collections: string[];

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  ammount: number;

  @IsEnum(Size)
  @IsNotEmpty()
  size: Size;
}
