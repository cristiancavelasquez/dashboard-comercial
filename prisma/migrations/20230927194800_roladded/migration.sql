-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('KAM', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rol" "Rol" NOT NULL DEFAULT 'KAM';
