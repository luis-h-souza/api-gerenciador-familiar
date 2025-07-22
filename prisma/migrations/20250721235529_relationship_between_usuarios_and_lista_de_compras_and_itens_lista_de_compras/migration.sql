-- AlterTable
ALTER TABLE "lista_de_compras" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Pendente';

-- AddForeignKey
ALTER TABLE "lista_de_compras" ADD CONSTRAINT "lista_de_compras_usuario_id_enviou_fkey" FOREIGN KEY ("usuario_id_enviou") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_de_compras" ADD CONSTRAINT "lista_de_compras_usuario_id_recebeu_fkey" FOREIGN KEY ("usuario_id_recebeu") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens_lista_de_compras" ADD CONSTRAINT "itens_lista_de_compras_id_fkey" FOREIGN KEY ("id") REFERENCES "lista_de_compras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
