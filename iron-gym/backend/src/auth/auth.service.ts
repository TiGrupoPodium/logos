import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}
  async register(dto: { email: string; password: string; fullName: string }) {
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({ ...dto, passwordHash });
    return { id: user.id, email: user.email };
  }
  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user?.passwordHash || !(await bcrypt.compare(password, user.passwordHash))) throw new UnauthorizedException('Credenciais inválidas');
    return { accessToken: await this.jwtService.signAsync({ sub: user.id, role: user.role, email: user.email }) };
  }
}
