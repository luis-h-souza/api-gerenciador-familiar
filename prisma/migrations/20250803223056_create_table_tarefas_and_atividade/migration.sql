/*
  Warnings:

  - You are about to drop the column `titulo` on the `lembretes` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id_recebeu` on the `lembretes` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `lista_de_compras` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id_recebeu` on the `lista_de_compras` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `lista_de_compras` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lembretes" DROP CONSTRAINT "lembretes_usuario_id_recebeu_fkey";

-- DropForeignKey
ALTER TABLE "lista_de_compras" DROP CONSTRAINT "lista_de_compras_usuario_id_recebeu_fkey";

-- DropForeignKey
ALTER TABLE "registros_de_manutencao" DROP CONSTRAINT "registros_de_manutencao_veiculo_id_fkey";

-- AlterTable
ALTER TABLE "lembretes" DROP COLUMN "titulo",
DROP COLUMN "usuario_id_recebeu";

-- AlterTable
ALTER TABLE "lista_de_compras" DROP COLUMN "nome",
DROP COLUMN "usuario_id_recebeu",
ADD COLUMN     "tipo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "tarefas" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atividades" (
    "id" UUID NOT NULL,
    "tipo" TEXT NOT NULL,
    "acao" TEXT NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atividades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registros_de_manutencao" ADD CONSTRAINT "registros_de_manutencao_veiculo_id_fkey" FOREIGN KEY ("veiculo_id") REFERENCES "veiculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
