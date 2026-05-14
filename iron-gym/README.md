# Iron Gym Platform

Monorepo da plataforma **Iron Gym** com:
- `backend/`: API REST com NestJS + Prisma + PostgreSQL
- `admin-web/`: painel administrativo com Next.js
- `ios-app/`: aplicativo iOS com SwiftUI (MVVM)
- `infra/`: docker-compose e utilitários locais

## Etapas recomendadas
1. Backend + autenticação
2. Painel admin
3. iOS app

## Subir localmente
```bash
cp backend/.env.example backend/.env
cp admin-web/.env.example admin-web/.env.local
cd infra && docker compose up -d
cd ../backend && npm install && npm run prisma:migrate && npm run seed && npm run start:dev
cd ../admin-web && npm install && npm run dev
```

## Arquitetura
- Clean Architecture (camadas: domain/application/infrastructure/presentation)
- Backend modular (auth, users, workouts, billing, notifications, scheduling, chat)
- iOS MVVM com serviços desacoplados
- RBAC no painel admin

## Credenciais seed
- admin@irongym.app / `Admin@123`
- aluno@irongym.app / `Aluno@123`
