const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class TaskRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Cria uma tarefa
  async create({ descricao, usuarioId, status }) {
    const newTask = await prismaClient.tarefa.create({
      data: {
        descricao,
        status: status ?? false, // Usa o status do body ou false se não fornecido
        usuario: {
          connect: { id: usuarioId }, // Conexão com um id de usuário existente (FK)
        },
        atividades: {
          create: {
            tipo: 'TAREFA',
            acao: 'CRIADA',
            dataHora: new Date(),
          },
        }
      },
      include: {
        atividades: true,
      },
    });

    return newTask;
  };

  // Lista tarefas pelo id do usuário
  async showByUserId({ accountId }) {
    const tasks = await prismaClient.tarefa.findMany({
      where: {
        usuarioId: accountId, // Filtra todas as tarefas do usuário com o accountId
      },
      select: {
        id: true,
        descricao: true,
        status: true,
      },
    });

    console.log("Tasks encontradas:", tasks); // Debug

    if (!tasks || tasks.length === 0) {
      throw new Error("Nenhuma tarefa encontrada para este usuário.");
    }

    return tasks;
  };

  // Lista todas as tarefas
  async show() {
    const allTasks = await prismaClient.tarefa.findMany({
      select: {
        id: true,
        descricao: true,
        status: true,
      },
    });

    if (!allTasks.length) {
      throw new Error("Usuário não encontrado");
    }
    return allTasks;
  };

  // Atualiza uma tarefa
  async update({ descricao, status, tarefaId }) {
    const updateTask = await prismaClient.tarefa.update({
      where: { id: tarefaId },
      data: {
        descricao,
        status,
        atividades: {
          create: {
            tipo: 'TAREFA',
            acao: 'ATUALIZADA',
            dataHora: new Date(),
          }
        },
      },
      include: {
        atividades: true,
      },
    });
    return updateTask;
  };

  // Deleta uma tarefa
  async delete({ id }) {
    const result = await prismaClient.$transaction(async (tx) => {

      await tx.atividade.create({
        data: {
          tipo: 'TAREFA',
          acao: 'EXCLUIDA',
          dataHora: new Date(),
          tarefaId: id
        },
      });

      const taskDelete = await tx.tarefa.delete({
        where: { id },
      });
      return taskDelete;
    });
    
    return result;
  };
}

module.exports = { TaskRepository };
