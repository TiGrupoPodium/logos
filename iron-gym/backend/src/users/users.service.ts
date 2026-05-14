import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  findByEmail(email: string) { return this.prisma.user.findUnique({ where: { email } }); }
  create(data: { email: string; fullName: string; passwordHash: string }) { return this.prisma.user.create({ data }); }
  list() { return this.prisma.user.findMany({ orderBy: { createdAt: 'desc' } }); }
}
