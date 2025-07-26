-- CreateEnum
CREATE TYPE "Rotulo" AS ENUM ('PAIS', 'FILHO');

-- AlterTable
ALTER TABLE "familia_usuarios" ADD COLUMN     "rotulo" "Rotulo" NOT NULL DEFAULT 'FILHO';
