-- AddForeignKey
ALTER TABLE "lembretes" ADD CONSTRAINT "lembretes_usuario_id_recebeu_fkey" FOREIGN KEY ("usuario_id_recebeu") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lembretes" ADD CONSTRAINT "lembretes_usuario_id_enviou_fkey" FOREIGN KEY ("usuario_id_enviou") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lembretes" ADD CONSTRAINT "lembretes_lista_de_compra_id_fkey" FOREIGN KEY ("lista_de_compra_id") REFERENCES "lista_de_compras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lembretes" ADD CONSTRAINT "lembretes_veiculo_id_fkey" FOREIGN KEY ("veiculo_id") REFERENCES "veiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
