-- CreateTable
-- id: UUID v7 via função nativa do PostgreSQL 18+ (ordenável por tempo de criação)
-- password: coluna para armazenar hash (bcrypt/argon2); a aplicação não deve persistir senha em texto puro

CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuidv7(),
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
