const { z } = require("zod");

const baseSchema = z.object({
  marca: z
    .string({ required_error: "A marca é obrigatória" })
    .min(1, { message: 'A marca deve ter no mínimo 1 caractere' })
    .max(30, { message: 'A marca deve ter no máximo 30 caracteres' }),

  modelo: z
    .string({ required_error: "O modelo é obrigatório" })
    .min(3, { message: 'O modelo deve ter no mínimo 3 caracteres' })
    .max(30, { message: 'O modelo deve ter no máximo 30 caracteres' }),

  ano: z
    .number({ required_error: "O ano é obrigatório" })
    .int({ message: "O ano deve ser um número inteiro" })
    .positive({ message: "O ano deve ser positivo" })
    .min(1900, { message: 'O ano deve ser maior ou igual a 1900' })
    .max(new Date().getFullYear() + 1, { message: 'O ano não pode ser maior que o ano atual + 1' }),

  placa: z
    .string({ required_error: "A placa é obrigatória" })
    .transform((val) => val.toUpperCase().replace(/-/g, ''))
    .refine(
      (val) => /^[A-Z]{3}[0-9]{4}$/.test(val) || /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(val),
      { message: 'Placa inválida. Use o formato ABC-1234 ou ABC1D23.' }
    )
    .transform((val) => {
      if (/^[A-Z]{3}[0-9]{4}$/.test(val)) {
        return `${val.slice(0, 3)}-${val.slice(3)}`;
      }
      return val;
    }),
});

const createVehicleSchema = baseSchema;

// schema para Update (vehicleId obrigatório)
const updateVehicleSchema = baseSchema.extend({
  vehicleId: z.union([z.string().uuid(), z.number().int().positive()], {
    required_error: "O campo vehicleId é obrigatório"
  })
});

class VehicleController {
  constructor(VehicleRepository) {
    this.VehicleRepository = VehicleRepository;
  }

  // Cria um veículo
  async create({ body, req }) {
    try {
      const { marca, modelo, ano, placa } = createVehicleSchema.parse(body);
      const usuarioId = req.accountId; // Obtém do jwtGuard

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
      const veihicles = await this.VehicleRepository.show();
      console.log(veihicles)
      return {
        statusCode: 200,
        body: veihicles,
      };
    } catch (error) {
      if (error.message === 'Nenum veículo encontrado.') {
        return {
          statusCode: 400,
          body: null,
        };
      }
    }
  };

  // lista todos os veículo pelo ID
  async showByUserId({ params, req, accountId }) {
    accountId = params.id; // O ID agora é o ID do usuário, vindo dos params
    console.log("accountId controller", accountId)

    try {
      const foundVehicle = await this.VehicleRepository.showByUserId(accountId);

      return {
        statusCode: 200,
        body: foundVehicle,
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

  // Atualiza um veículo
  async update({ body, params }) {
    const vehicleIdParam = params.id; // O ID agora é o ID do usuário, vindo dos params
    console.log("accountIdParam", vehicleIdParam)

    try {
      const { vehicleId, marca, modelo, ano, placa } = updateVehicleSchema.parse({
        vehicleId: vehicleIdParam,
        ...body,
      });
      console.log("vehicleId", vehicleId)

      const result = await this.VehicleRepository.update({
        marca,
        modelo,
        ano,
        placa,
        vehicleId: vehicleIdParam, // envia para o repository
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

      if (error.statusCode === 409) {
        return {
          statusCode: 409,
          body: { message: error.message },
        };
      }

      console.log("erro interno", error)//!
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
          body: { error: 'Veículo não encontrado!' },
        };
      }
      throw error;
    }
  };
}

module.exports = { VehicleController };
