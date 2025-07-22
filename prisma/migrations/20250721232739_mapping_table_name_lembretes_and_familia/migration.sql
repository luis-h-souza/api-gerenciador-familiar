/*
  Warnings:

  - You are about to drop the `Lembrete` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `familias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Lembrete";

-- DropTable
DROP TABLE "familias";

-- CreateTable
CREATE TABLE "familia" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "familia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familia_usuarios" (
    "id_usuario" TEXT NOT NULL,
    "id_familia" TEXT NOT NULL,

    CONSTRAINT "familia_usuarios_pkey" PRIMARY KEY ("id_usuario","id_familia")
);

-- CreateTable
CREATE TABLE "lembretes" (
    "id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,
    "usuario_id_enviou" UUID NOT NULL,
    "usuario_id_recebeu" UUID NOT NULL,
    "lista_de_compra_id" UUID NOT NULL,
    "veiculo_id" UUID NOT NULL,

    CONSTRAINT "lembretes_pkey" PRIMARY KEY ("id")
);
