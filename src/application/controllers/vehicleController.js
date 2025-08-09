const { z } = require('zod');

const schema = z.object({
  marca: z
    .string()
    .min(1, { message: 'A marca deve ter no mínimo 1 caractere' })
    .max(30, { message: 'A marca deve ter no máximo 30 caracteres' }),
  modelo: z
    .string()
    .min(3, { message: 'O modelo deve ter no mínimo 3 caracteres' })
    .max(30, { message: 'O modelo deve ter no máximo 30 caracteres' }),
  ano: z
    .number()
    .int()
    .positive()
    .min(1900, { message: 'O ano deve ser maior ou igual a 1900' })
    .max(new Date().getFullYear() + 1, { message: 'O ano não pode ser maior que o ano atual + 1' }),
  placa: z
    .string()
    .transform((val) => val.toUpperCase().replace(/-/g, '')) // Converte para maiúsculas e remove hífen
    .refine(
      (val) => /^[A-Z]{3}[0-9]{4}$/.test(val) || /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(val),
      {
        message: 'Placa inválida. Use o formato ABC-1234 ou ABC1D23.',
      }
    )
    .transform((val) => {
      // Adiciona hífen para o formato antigo, se necessário
      if (/^[A-Z]{3}[0-9]{4}$/.test(val)) {
        return `${val.slice(0, 3)}-${val.slice(3)}`;
      }
      return val;
    }),
});

class VehicleController {
  constructor(VehicleRepository) {
    this.VehicleRepository = VehicleRepository;
  }

  // Cria um veículo
  async create({ body, req }) {
    try {
      const { marca, modelo, ano, placa } = schema.parse(body);
      const usuarioId = req.accountId; // Obtém do jwtGuard

      console.log('VehicleController: usuarioId:', usuarioId);//!

      const newCar = await this.VehicleRepository.create({ marca, modelo, ano, placa, usuarioId });
      return {
        statusCode: 201,
        body: newCar,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { errors: error.issues },
        };
      }
      if (error.message === 'Usuário não encontrado.') {
        return {
          statusCode: 404,
          body: { message: error.message },
        };
      }
      if (error.message === 'A placa já está registrada.') {
        return {
          statusCode: 400,
          body: { message: error.message },
        };
      }
      console.error('Erro ao criar veículo:', error);
      return {
        statusCode: 500,
        body: { message: 'Erro interno do servidor' },
      };
    }
  };

  // lista todos os veículo
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

  // Atualiza um veículo
  async update({ body, params }) {
    const { id } = params;

    try {
      const { descricao, status } = schema.parse(body);

      console.log("Tentando atualizar tarefa:", id, descricao, status); //!

      const result = await this.TarefaRepository.update({
        descricao,
        status,
        tarefaId: id,
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

  // deleta um veículo
  async delete({ params }) {
    const { id } = params;
    try {
      await this.VehicleRepository.delete({ id })
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

module.exports = { VehicleController };
