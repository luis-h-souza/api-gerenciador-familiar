const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class VehicleRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Cria um veículo
  async create({ marca, modelo, ano, placa, usuarioId }) {
    try {
      // Verifica se o usuário existe
      const userExists = await prismaClient.usuario.findUnique({
        where: { id: usuarioId },
      });
      if (!userExists) {
        throw new Error('Usuário não encontrado.');
      }
      // Cria o veículo e a atividade associada
      const newCar = await prismaClient.veiculo.create({
        data: {
          marca,
          modelo,
          ano,
          placa,
          usuario: {
            connect: { id: usuarioId },
          },
          atividades: {
            create: {
              tipo: 'VEICULO',
              acao: 'CRIADA',
              dataHora: new Date(),
            },
          },
        },
        include: { atividades: true }
      });

      return newCar;

    } catch (error) {
      if (error.message === 'Veículo não encontrado.') {
        throw error;
      }
      if (error.code === 'P2002') {
        // Erro de violação de unicidade
        throw new Error('A placa já está registrada.');
      }
      console.error('Erro ao criar veículo:', error);
      throw new Error('Erro interno ao criar veículo.');
    }
  }

  // Lista todas os veículo
  async show() {
    const allVehicles = await prismaClient.veiculo.findMany();

    if (!allVehicles.length) {
      throw new Error("Usuário não encontrado");
    }
    return allVehicles;
  };

  // Atualiza um veículo
  async update({ marca, modelo, ano, placa, vehicleId }) {
    console.log("vehicleId repository", vehicleId)

    const updateTask = await prismaClient.veiculo.update({
      where: { id: vehicleId }, // recebe do controller
      data: {
        marca,
        modelo,
        ano,
        placa,
        atividades: {
          create: {
            tipo: 'VEICULO',
            acao: 'ATUALIZADA',
            dataHora: new Date(),
          }
        },
      },
      include: { atividades: true }
    });

    return updateTask;
  };

  // Deleta um veículo
  async delete({ id }) {
    const result = await prismaClient.$transaction(async (tx) => {
      await tx.atividade.create({
        data: {
          tipo: 'VEICULO',
          acao: 'EXCLUIDA',
          dataHora: new Date(),
          veiculoId: id,
        }
      });

      const vehicleDelete = await tx.veiculo.delete({
        where: { id },
      });
      return vehicleDelete;
    });

    return result;
  };

}

module.exports = { VehicleRepository };
