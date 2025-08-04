const { z } = require('zod');

const schema = z.object({
  descricao: z.string().min(1, { message: 'A descrição deve ter no mínimo 01 caractere' }),
  status: z.boolean().optional(), // status é opcional, usa default(false) se não fornecido
});

class TaskController {
  constructor(TarefaRepository) {
    this.TarefaRepository = TarefaRepository;
  }

  // Cria uma tarefa
  async create({ body, accountId }) {
    try {
      const { descricao, status } = schema.parse(body);
      const newTask = await this.TarefaRepository.create({ descricao, status, usuarioId: accountId });
      return {
        statusCode: 201,
        body: newTask,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }
      throw error;
    }
  };

  // lista todas as tarefas
  async show() {
    try {
      const tasks = await this.TarefaRepository.show();
      console.log(tasks)
      return {
        statusCode: 200,
        body: tasks,
      };
    } catch (error) {
      if (error.message === 'Tarefa não encontrada') {
        return {
          statusCode: 400,
          body: null,
        };
      }
    }
  };
  
  // lista uma tarefa pelo ID
  async showById({ params }) {
    const { id } = params;

    try {
      const foundUser = await this.TarefaRepository.showById({ id: params.id });

      return {
        statusCode: 200,
        body: foundUser,
      };

    } catch (error) {

      if (!id) {
        return {
          statusCode: 401,
          body: { message: "Tarefa não encontrada" },
        };
      };

      if (error.message === 'Tarefa não encontrada') {
        return {
          statusCode: 400,
          body: { message: "Tarefa não encontrada" },
        };
      }
    }
  };

  // Atualiza uma tarefa
  async update({ body, params }) {
    const { id } = params;
    try {
      // Validar o body com Zod
      const { descricao } = schema.parse(body);

      const result = await this.TarefaRepository.update({ id, descricao, situacao: false })

      return {
        statusCode: 200,
        body: result,
      };

    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }
      throw error;
    }
  };

  // deleta uma tarefa
  async delete({ params }) {
    const { id } = params;
    try {
      await this.TarefaRepository.delete({ id })
      return {
        statusCode: 204,
        body: null,
      };

    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error.code === 'P2025') {
        return {
          statusCode: 404,
          body: { error: 'Tarefa não encontrada!' },
        };
      }
      throw error;
    }
  };
}

module.exports = { TaskController };
