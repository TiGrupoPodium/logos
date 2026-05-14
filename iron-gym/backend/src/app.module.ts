import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { PrismaService } from './common/prisma.service';

@Module({ imports: [AuthModule, UsersModule, WorkoutsModule], providers: [PrismaService] })
export class AppModule {}
