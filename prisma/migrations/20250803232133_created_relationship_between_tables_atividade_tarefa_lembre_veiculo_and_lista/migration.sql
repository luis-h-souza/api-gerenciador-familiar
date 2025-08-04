/*
  Warnings:

  - The `status` column on the `lista_de_compras` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `tipo` on the `atividades` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `acao` on the `atividades` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `usuario_id` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoAtividade" AS ENUM ('LEMBRETE', 'TAREFA', 'LISTA', 'VEICULO');

-- CreateEnum
CREATE TYPE "AcaoAtividade" AS ENUM ('CRIADA', 'ATUALIZADA', 'EXCLUIDA');

-- AlterTable
ALTER TABLE "atividades" ADD COLUMN     "lembrete_id" UUID,
ADD COLUMN     "lista_de_compra_id" UUID,
ADD COLUMN     "tarefa_id" UUID,
ADD COLUMN     "veiculo_id" UUID,
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoAtividade" NOT NULL,
DROP COLUMN "acao",
ADD COLUMN     "acao" "AcaoAtividade" NOT NULL,
ALTER COLUMN "data_hora" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "lembretes" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "data_hora" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "lista_de_compras" DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "registros_de_manutencao" ADD COLUMN     "valor" DOUBLE PRECISION,
ALTER COLUMN "descricao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tarefas" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "usuario_id" UUID NOT NULL;

-- CreateIndex
CREATE INDEX "usuarios_email_idx" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_tarefa_id_fkey" FOREIGN KEY ("tarefa_id") REFERENCES "tarefas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_lista_de_compra_id_fkey" FOREIGN KEY ("lista_de_compra_id") REFERENCES "lista_de_compras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_lembrete_id_fkey" FOREIGN KEY ("lembrete_id") REFERENCES "lembretes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_veiculo_id_fkey" FOREIGN KEY ("veiculo_id") REFERENCES "veiculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
