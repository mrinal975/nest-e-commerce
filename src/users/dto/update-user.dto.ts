import { IsString, MinLength, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  password: string;
}
