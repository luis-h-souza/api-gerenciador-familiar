const { z } = require('zod');

const schema = z.object({
  descricao: z.string().min(1, { message: 'A descrição deve ter no mínimo 01 caractere' }).max(255, { message: 'A descrição deve ter no máximo 255 caracteres' }),
  status: z.boolean().optional(), // status é opcional, usa default(false) se não fornecido
});

const getTasksByUserId = z.string().uuid().or(z.number().int().positive());

class TaskController {
  constructor(TarefaRepository) {
    this.TarefaRepository = TarefaRepository;
  }

  // Cria uma tarefa
  // async create({ body, accountId }) {
  //   try {
  //     const { descricao, status } = schema.parse(body);
  //     const newTask = await this.TarefaRepository.create({ descricao, status, usuarioId: accountId });
  //     return {
  //       statusCode: 201,
  //       body: newTask,
  //     };
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       return {
  //         statusCode: 400,
  //         body: error.issues,
  //       };
  //     }
  //     throw error;
  //   }
  // };
  async create({ body, accountId }) {
    try {
      const { descricao, status } = schema.parse(body);
      const newTask = await this.TarefaRepository.create({
        descricao,
        status,
        usuarioId: accountId
      });
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

  // lista as tarefas pelo ID
  async showByUserId({ params, req }) {
    const accountId = params.id; // O ID agora é o ID do usuário, vindo dos params

    try {
      // Validar o accountId com Zod
      const validatedUserId = getTasksByUserId.parse(accountId); // Schema Zod para validar o ID do usuário
      const foundTasks = await this.TarefaRepository.showByUserId({ accountId: validatedUserId });

      return {
        statusCode: 200,
        body: foundTasks,
      };
    } catch (error) {
      if (error.message === "Nenhuma tarefa encontrada para este usuário.") {
        return {
          statusCode: 404,
          body: { message: "Nenhuma tarefa encontrada para este usuário." },
        };
      }

      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { message: "ID de usuário inválido" },
        };
      }

      console.error("Error fetching tasks:", error);
      return {
        statusCode: 500,
        body: { message: "Erro interno do servidor" },
      };
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

  // Atualiza uma tarefa
  async update({ body, params, accountId }) {
    const { id } = params; // O ID da tarefa vem dos params

    try {
      const { descricao, status } = schema.parse(body);

      const result = await this.TarefaRepository.update({
        descricao,
        status,
        tarefaId: id,
        usuarioId: accountId // Passa o ID do usuário para a atualização
      });

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

      return {
        statusCode: 500,
        body: { message: 'Erro interno no servidor.' },
      };
    }
  };

  // deleta uma tarefa
  async delete({ params, accountId }) {
    const { id } = params;
    try {
      await this.TarefaRepository.delete({ id, usuarioId: accountId })
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
