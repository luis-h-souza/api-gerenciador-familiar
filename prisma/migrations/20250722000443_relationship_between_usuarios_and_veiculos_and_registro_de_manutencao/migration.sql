-- DropForeignKey
ALTER TABLE "itens_lista_de_compras" DROP CONSTRAINT "itens_lista_de_compras_id_fkey";

-- AddForeignKey
ALTER TABLE "itens_lista_de_compras" ADD CONSTRAINT "itens_lista_de_compras_lista_id_fkey" FOREIGN KEY ("lista_id") REFERENCES "lista_de_compras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veiculos" ADD CONSTRAINT "veiculos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros_de_manutencao" ADD CONSTRAINT "registros_de_manutencao_veiculo_id_fkey" FOREIGN KEY ("veiculo_id") REFERENCES "veiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
