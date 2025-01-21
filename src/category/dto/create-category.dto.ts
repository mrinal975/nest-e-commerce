import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, { message: 'Description must be less than 255 characters' })
  @MinLength(3, { message: 'Description must be more than 3 characters' })
  description: string;
}
