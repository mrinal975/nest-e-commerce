import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signUp(@Body() signupDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signupDto);
  }
  @Post('signin')
  async signIn(@Body() signInDto: SignUpDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(signInDto);
  }
}
