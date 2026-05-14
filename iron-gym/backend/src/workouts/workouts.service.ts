import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class WorkoutsService {
  constructor(private prisma: PrismaService) {}
  list() { return this.prisma.workout.findMany({ include: { exercises: { include: { exercise: true } } } }); }
}
