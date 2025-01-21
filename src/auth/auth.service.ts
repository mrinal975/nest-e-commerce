import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/sign-up-dto';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in-dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async signUp(signupDto: SignUpDto): Promise<void> {
    const { email, password } = signupDto;
    const existingUser = await this.userService.getUserByEmail(email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.userService.createUser({
      ...signupDto,
      password: hashedPassword,
    });
  }

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { email, password } = signInDto;
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new ConflictException('User not found');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new ConflictException('Invalid credentials');
    }
    const payload = { email: user.email, id: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
