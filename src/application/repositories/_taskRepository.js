const { connect } = require("http2");
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
        usuarioId, // ID do usuário que criou a tarefa
      }
    });

    const newActivity = await prismaClient.atividade.create({
      data: {
        tipo: 'TAREFA',
        acao: 'CRIADA',
        dataHora: new Date(),
        tarefaId: newTask.id,   // Passa o ID direto
      },
      include: {
        tarefa: true,
      }
    });

    return { newTask, newActivity };
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
  async update({ descricao, status, tarefaId, usuarioId }) {
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
            usuarioId: usuarioId, // Relacionamento correto
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
  async delete({ id, accountId }) {
    // Valida se a tarefa existe e pertence ao usuário
    const taskExists = await prismaClient.tarefa.findUnique({
      where: {
        id,
        usuarioId: accountId, // Garante que a tarefa pertence ao usuário
      },
    });

    if (!taskExists) {
      const error = new Error("Tarefa não encontrada ou não pertence ao usuário.");
      error.code = 'P2025';
      throw error;
    } else {

      const result = await prismaClient.$transaction(async (tx) => {

        console.log("Iniciando transação para deletar tarefa:", id);
        await tx.atividade.create({
          data: {
            tipo: 'TAREFA',
            acao: 'EXCLUIDA',
            dataHora: new Date(),
            tarefa: { connect: { id: taskExists.id } },
            // usuarioId: taskExists.usuarioId
          },
          select: {
            usuarioId: true
          }
        });
        // Deleta a tarefa e suas atividades associadas
        const taskDelete = await tx.tarefa.delete({
          where: { id },
          include: {
            atividades: true,
          }
        });
        return taskDelete;
      });
      return result;
    };

  }
}
module.exports = { TaskRepository };
