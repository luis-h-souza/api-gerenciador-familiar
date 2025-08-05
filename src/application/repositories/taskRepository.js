const { prismaClient } = require("../../libs/PrismaClient");

// Função para validar UUID
const isValidUUID = (str) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return typeof str === 'string' && uuidRegex.test(str);
};

const SALT = 10;

class TaskRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Cria uma tarefa
  async create({ descricao, usuarioId, status }) {
    // Valida a descrição
    if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
      throw new Error('A descrição é obrigatória e não deve ser um texto vazio.');
    }

    // Valida o usuarioId como UUID
    if (!usuarioId || !isValidUUID(usuarioId)) {
      throw new Error('O ID do usuário é obrigatório e deve ser um UUID válido.');
    }

    // Valida o status (se fornecido, deve ser booleano)
    if (status !== undefined && typeof status !== 'boolean') {
      throw new Error('O status deve ser um valor booleano (true ou false).');
    }

    const newTask = await prismaClient.tarefa.create({
      data: {
        descricao,
        status: status ?? false, // Usa o status do body ou false se não fornecido
        usuario: {
          connect: { id: usuarioId }, // Conexão com um id de usuário existente (FK)
        },
      },
    });

    return newTask;
  };

  // lista todas as tarefas
  async show() {
    const allTasks = await prismaClient.tarefa.findMany({
      select: {
        id: true,
        descricao: true,
        status: true,
      },
    });
    console.log(allTasks) //!debug
    if (!allTasks.length) {
      throw new Error("Usuário não encontrado");
    }
    return allTasks;
  };

  // Atualiza uma tarefa
  async update({ descricao, status, tarefaId }) {

    // Valida a descrição
    if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
      throw new Error('A descrição é obrigatória e não deve ser um texto vazio.');
    }

    // Valida o usuarioId como UUID
    if (!tarefaId || !isValidUUID(tarefaId)) {
      throw new Error('O ID do usuário é obrigatório e deve ser um UUID válido.');
    }

    // Valida o status (se fornecido, deve ser booleano)
    if (status !== undefined && typeof status !== 'boolean') {
      throw new Error('O status deve ser um valor booleano (true ou false).');
    }

    const updateTask = await prismaClient.tarefa.update({
      where: { id: tarefaId },
      data: { descricao, status },
    });
    console.log(updateTask) //! debug
    return updateTask;
  };

  // deleta uma tarefa
  async delete({ id }) {
    const taskDelete = await prismaClient.tarefa.delete({
      where: { id },
    })
    return taskDelete;
  };

}

module.exports = { TaskRepository };
