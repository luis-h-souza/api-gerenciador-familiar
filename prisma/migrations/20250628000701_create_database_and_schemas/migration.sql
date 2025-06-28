-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lista_de_compras" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "usuario_id_enviou" UUID NOT NULL,
    "usuario_id_recebeu" UUID NOT NULL,

    CONSTRAINT "lista_de_compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens_lista_de_compras" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "lista_id" UUID NOT NULL,
    "comprado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "itens_lista_de_compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "id" UUID NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "placa" TEXT NOT NULL,
    "usuario_id" UUID NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros_de_manutencao" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "veiculo_id" UUID NOT NULL,

    CONSTRAINT "registros_de_manutencao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lembrete" (
    "id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,
    "usuario_id_enviou" UUID NOT NULL,
    "usuario_id_recebeu" UUID NOT NULL,
    "lista_de_compra_id" UUID NOT NULL,
    "veiculo_id" UUID NOT NULL,

    CONSTRAINT "Lembrete_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_placa_key" ON "Veiculo"("placa");
