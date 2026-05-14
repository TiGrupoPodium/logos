import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  const adminPass = await bcrypt.hash('Admin@123', 10);
  const studentPass = await bcrypt.hash('Aluno@123', 10);
  await prisma.user.upsert({ where: { email: 'admin@irongym.app' }, update: {}, create: { email: 'admin@irongym.app', fullName: 'Admin Iron Gym', role: Role.ADMIN, passwordHash: adminPass } });
  await prisma.user.upsert({ where: { email: 'aluno@irongym.app' }, update: {}, create: { email: 'aluno@irongym.app', fullName: 'Aluno Demo', role: Role.STUDENT, passwordHash: studentPass } });
}
main().finally(() => prisma.$disconnect());
