import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsEmail, IsString, MinLength } from 'class-validator';

class LoginDto { @IsEmail() email!: string; @IsString() @MinLength(6) password!: string; }
class RegisterDto extends LoginDto { @IsString() fullName!: string; }

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register') register(@Body() dto: RegisterDto) { return this.authService.register(dto); }
  @Post('login') login(@Body() dto: LoginDto) { return this.authService.login(dto.email, dto.password); }
}
