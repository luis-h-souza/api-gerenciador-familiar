const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class ShoppingListRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Cria uma tarefa
  async create({ tipo, usuarioId }) {
    // Valida o tipo de lista
    if (
      !["MERCADO", "FARMACIA", "PADARIA", "ACOUGUE", "OUTROS"].includes(tipo)
    ) {
      throw new Error(
        "Tipo de lista inválido. Use MERCADO, FARMACIA, PADARIA, ACOUGUE ou OUTROS."
      );
    }

    const newList = await prismaClient.listaDeCompra.create({
      data: {
        tipo,
        usuarioId,
        atividades: {
          create: {
            tipo: "LISTA",
            acao: "CRIADA",
            dataHora: new Date(),
            usuarioId,
          },
        },
      },
      include: {
        atividades: true,
      },
    });

    return newList;
  };

  // lista todas as listas
  async show() {
    const allLists = await prismaClient.listaDeCompra.findMany({
      select: {
        id: true,
        tipo: true,
      },
    });
    if (!allLists.length) {
      throw new Error("Listas de compra não encontradas.");
    }
    return allLists;
  };

  // Atualiza uma lista
  async update({ tipo, listaId, usuarioId }) {
    const exists = await prismaClient.listaDeCompra.findUnique({
      where: { id: listaId },
    });

    if (!exists) {
      const error = new Error('Lista não encontrada');
      error.code = 'P2025';  // ✅ Adiciona o código do erro
      throw error;
    }

    const updateList = await prismaClient.listaDeCompra.update({
      where: { id: listaId },
      data: {
        tipo,
        usuarioId,
        atividades: {
          create: {
            tipo: "LISTA",
            acao: "ATUALIZADA",
            dataHora: new Date(),
            usuarioId,
          },
        },
      },
      include: { atividades: true },
    });

    return updateList;
  };

  // deleta uma lista de compras
  async delete(id) {
    const exists = await prismaClient.listaDeCompra.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new Error("P2025");
    }

    const result = await prismaClient.$transaction(async (tx) => {
      await tx.atividade.create({
        data: {
          tipo: "LISTA",
          acao: "EXCLUIDA",
          dataHora: new Date(),
          listaDeCompraId: id,
        },
      });

      const ListDelete = await tx.listaDeCompra.delete({
        where: { id },
      });

      return ListDelete;
    });
    return result;
  };

  //? Itens para as listas de compra
  // Adiciona um item à lista de compras
  async addItem({ listaId, descricao, quantidade }) {
    // Verifica se a lista existe
    const lista = await prismaClient.listaDeCompra.findUnique({
      where: { id: listaId },
    });

    if (!lista) {
      throw new Error("Lista de compras não encontrada.");
    }

    const novoItem = await prismaClient.itemListaDeCompra.create({
      data: {
        descricao,
        quantidade,
        listaId,
      },
      include: {
        lista: true,
      },
    });

    // Cria atividade de log
    await prismaClient.atividade.create({
      data: {
        tipo: "LISTA",
        acao: "ATUALIZADA",
        dataHora: new Date(),
        listaDeCompraId: listaId,
      },
    });

    return novoItem;
  };

  // Lista todos os itens de uma lista específica
  async getItemsByList({ listaId }) {
    const itens = await prismaClient.itemListaDeCompra.findMany({
      where: { listaId },
      orderBy: { descricao: "asc" },
    });

    return itens;
  };

  // Marca item como comprado
  async markItemAsPurchased({ itemId, comprado }) {
    const item = await prismaClient.itemListaDeCompra.update({
      where: { id: itemId },
      data: { comprado },
    });

    return item;
  };
}

module.exports = { ShoppingListRepository };
