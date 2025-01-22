import { IsNumber, IsString } from 'class-validator';

export class createSubCategoryDto {
  @IsString()
  name: string;

  @IsNumber()
  category_id: number;

  @IsString()
  description: string;
}
