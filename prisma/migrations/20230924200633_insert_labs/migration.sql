-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('Recurrente', 'Demo');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pendiente', 'QVF', 'Publicado');

-- CreateTable
CREATE TABLE "Laboratorios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "geo360" BOOLEAN NOT NULL DEFAULT false,
    "geoPx" BOOLEAN NOT NULL DEFAULT false,
    "TD" BOOLEAN NOT NULL DEFAULT false,
    "RM" BOOLEAN NOT NULL DEFAULT false,
    "kamId" TEXT NOT NULL,
    "tipo" "Tipo" NOT NULL DEFAULT 'Demo',
    "status" "Status" NOT NULL DEFAULT 'Pendiente',

    CONSTRAINT "Laboratorios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Laboratorios" ADD CONSTRAINT "Laboratorios_kamId_fkey" FOREIGN KEY ("kamId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
