const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class ActivitiesRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Lista todas os veículo
  async show() {
    const allActivities = await prismaClient.atividade.findMany({
      take: 5,
      orderBy: {
        dataHora: 'desc'
      },
    });

    if (!allActivities.length) {
      throw new Error("Atividades não encontradas.");
    }
    return allActivities;
  };

  // Lista as últimas 5 atividades de um usuário
  async showById(userId) {
    const userExists = await prismaClient.usuario.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new Error("Usuário não encontrado.");
    };

    // 1. Buscar IDs das tarefas do usuário
    const tarefas = await prismaClient.tarefa.findMany({
      where: { usuarioId: userId },
      select: { id: true }
    });
    const tarefaIds = tarefas.map(t => t.id);

    // 2. Buscar atividades relacionadas a essas tarefas
    const activities = await prismaClient.atividade.findMany({
      where: {
        OR: [
          { tarefaId: { in: tarefaIds } },
          // { usuarioId: userId } // atividades diretamente do usuário
        ]
      },
      orderBy: {
        dataHora: 'desc',
      },
      take: 5,
      include: {
        tarefa: true,
        lista: {
          include: {
            itens: true, // Inclui os itens da lista de compras
          },
        },
        veiculo: {
          include: {
            manutencoes: true, // Inclui os registros de manutenção
          },
        },
      },

    });

    if (!activities.length) {
      throw new Error("Nenhuma atividade encontrada para o usuário.");
    }

    return activities;
  };
}

module.exports = { ActivitiesRepository };
