import { IsMongoId, IsNotEmpty } from 'class-validator';

export class FavoritesDTO {
  @IsMongoId()
  @IsNotEmpty()
  product: string;
}
