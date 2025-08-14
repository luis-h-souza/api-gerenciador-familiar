const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class ShoppingListRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Cria uma tarefa
  async create({ tipo, usuarioIdEnviou, status }) {

    // Valida o tipo de lista
    if (!['MERCADO', 'FARMACIA', 'PADARIA', 'ACOUGUE', 'OUTROS'].includes(tipo)) {
      throw new Error('Tipo de lista inválido. Use MERCADO, FARMACIA, PADARIA, ACOUGUE ou OUTROS.');
    };

    // Valida o status (se fornecido, deve ser booleano)
    if (status !== undefined && typeof status !== 'boolean') {
      throw new Error('O status deve ser um valor booleano (true ou false).');
    };

    const newList = await prismaClient.listaDeCompra.create({
      data: {
        tipo,
        status,
        usuarioEnviou: {
          connect: { id: usuarioIdEnviou },
        },
        atividades: {
          create: {
            tipo: 'LISTA',
            acao: 'CRIADA',
            dataHora: new Date(),
          },
        }
      },
      include: {
        usuarioEnviou: true,
        atividades: true,
      }
    });

    return newList;
  };

  // lista todas as listas
  async show() {
    const allLists = await prismaClient.listaDeCompra.findMany({
      select: {
        id: true,
        tipo: true,
        usuarioIdEnviou: true,
        status: true,
      },
    });
    if (!allLists.length) {
      throw new Error("Listas de compra não encontradas.");
    }
    return allLists;
  };

  // Atualiza uma tarefa
  async update({ tipo, status, usuarioIdEnviou, listaId }) {
    console.log('Atualizando lista com ID:', listaId, 'para usuário:', usuarioIdEnviou);
    const exists = await prismaClient.listaDeCompra.findUnique({
      where: { id: listaId },
    });
    if (!exists) {
      console.log('Registro não encontrado para o ID:', listaId);
      throw new Error('P2025');
    }
    console.log('Registro encontrado:', exists);

    const updateList = await prismaClient.listaDeCompra.update({
      where: { id: listaId },
      data: {
        tipo,
        status,
        usuarioIdEnviou,
        atividades: {
          create: {
            tipo: 'LISTA',
            acao: 'ATUALIZADA',
            dataHora: new Date(),
          }
        }
      },
      include: { atividades: true } // Ajuste para 'atividade' se necessário
    });
    console.log('Lista atualizada:', updateList);
    return updateList;
  }

  // deleta uma lista de compras
  async delete({ id }) {

    const exists = await prismaClient.listaDeCompra.findUnique({
      where: { id },
    });
    if (!exists) {
      throw new Error('P2025');
    }

    const result = await prismaClient.$transaction(async (tx) => {

      await tx.atividade.create({
        data: {
          tipo: 'LISTA',
          acao: 'EXCLUIDA',
          dataHora: new Date(),
          listaDeCompraId: id
        },
      });

      const ListDelete = await tx.listaDeCompra.delete({
        where: { id },
      });

      return ListDelete;
    });
    return result;
  }
}

module.exports = { ShoppingListRepository };
