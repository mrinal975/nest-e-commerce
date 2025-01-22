import { IsString } from 'class-validator';

export class createSubCategoryDto {
  @IsString()
  name: string;

  @IsString()
  category_id: string;

  @IsString()
  description: string;
}
