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
        usuario: {
          connect: { id: usuarioId }, // Conexão com um id de usuário existente (FK)
        },
        atividades: {
          create: {
            tipo: "LISTA",
            acao: "CRIADA",
            dataHora: new Date(),
            usuarioId: usuarioId, // Relacionamento correto
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
        usuario: {
          connect: { id: usuarioId }, // Conexão com um id de usuário existente (FK)
        },
        atividades: {
          create: {
            tipo: "LISTA",
            acao: "ATUALIZADA",
            dataHora: new Date(),
            usuarioId: usuarioId, // Relacionamento correto
          },
        },
      },
      include: { atividades: true },
    });

    return updateList;
  };

  // deleta uma lista de compras
  async delete(listId, usuarioId) {
    const exists = await prismaClient.listaDeCompra.findUnique({
      where: {
        id: listId,
      }
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
          // listaDeCompraId: listId,
          usuario: { connect: { id: usuarioId } }, // Relacionamento correto
        },
      });

      const ListDelete = await tx.listaDeCompra.delete({
        where: { id: listId },
      });

      return ListDelete;
    });
    return result;
  };

  //? Itens para as listas de compra
  // Adiciona um item à lista de compras
  async addItem({ listaId, descricao, quantidade, usuarioId }) {

    // Verifica se a lista existe
    const lista = await prismaClient.listaDeCompra.findUnique({
      where: { id: listaId, usuarioId: usuarioId },
    });

    console.log("ID da lista:", listaId);
    if (!lista) {
      throw new Error("Lista de compras não encontrada.");
    }

    const novoItem = await prismaClient.itemListaDeCompra.create({
      data: {
        descricao,
        quantidade,
        listaId,
        // usuarioId,
        // usuario: {
        //   connect: { id: usuarioId }, // Conexão com um id de usuário existente (FK)
        // },
      },
      select: {
        id: true,
        descricao: true,
        quantidade: true,
        comprado: true,
        listaId: true,
        // usuarioId: true, // Inclui o usuarioId no retorno
        lista: {
          select: {
            id: true,
            tipo: true
          }
        }
      },
    });

    // Cria atividade de log
    await prismaClient.atividade.create({
      data: {
        tipo: "LISTA",
        acao: "ATUALIZADA",
        dataHora: new Date(),
        listaDeCompraId: listaId,
        usuarioId: usuarioId, // Relacionamento correto
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
