# BurgerHub API (em desenvolvimento)

API REST para um sistema de hamburgueria (BurgerHub). **Este projeto ainda está em desenvolvimento**.

## Status

- 🚧 Em andamento (scaffold inicial + base de banco com Prisma)

## Stack

- Node.js + TypeScript (ESM)
- Express
- Prisma (PostgreSQL)
- Zod (validação)
- module-alias (atalhos de import)

## O que foi implementado até aqui

### Estrutura inicial do servidor

- `src/server.ts`: servidor Express carregando variáveis de ambiente (`dotenv/config`) e iniciando na porta `PORT` (padrão: `3333`).
- `src/routes.ts`: arquivo de rotas criado (ainda sem endpoints registrados).

### Aliases de import

- Configuração de alias `@src` via `module-alias` em `src/util/module-alias.ts`.
  - Permite imports como: `import { router } from '@src/routes'`.

### Prisma + PostgreSQL

- Configuração do Prisma em `prisma.config.ts`.
- Schema inicial em `prisma/schema.prisma` com as entidades:
  - `User` (com enum `Role`: `STAFF` | `ADMIN`)
  - `Category`
  - `Product` (relacionado com `Category`)
  - `Order`
  - `Item` (relacionado com `Order` e `Product`)
- Migração inicial criada: `prisma/migrations/20260420230650_create_tables`.
- Cliente Prisma configurado com Adapter PG em `src/prisma/index.ts` (usa `DATABASE_URL`).

### Validação com Zod

- Middleware genérico de validação: `src/middlewares/validateSchema.ts`
  - Valida `body`, `query` e `params`.
  - Retorna `400` com detalhes quando há erro de validação.

- Schema inicial de usuário: `src/schemas/userSchema.ts`
  - `name`, `email`, `password`.

### Módulo de usuário (incompleto)

- Controller inicial: `src/controllers/user/createUserController.ts` (estrutura criada, ainda sem resposta/retorno).
- Service inicial: `src/services/user/createUserService.ts` (método `execute` ainda vazio).

## Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado: LTS)
- Banco PostgreSQL

### Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```bash
PORT=3333
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### Instalação

```bash
npm install
```

### Rodar em desenvolvimento

```bash
npm run dev
```

### Build + start

```bash
npm run start
```

## Próximos passos sugeridos

- Implementar rotas e endpoints (ex: cadastro/login, categorias, produtos, pedidos)
- Conectar controller/service com Prisma (`src/prisma/index.ts`)
- Adicionar tratamento de erros (middleware global)
- Documentar endpoints (Swagger/OpenAPI)
- Adicionar scripts do Prisma (generate/migrate/seed)

---

> Observação: este README descreve **o que existe no repositório até o commit mais recente em 2026-04-21**.
