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
      throw new Error("Veículo não encontrado");
    }
    return allVehicles;
  };

  // lista todos os veículo pelo ID
  async showByUserId(accountId) {

    const vehicleById = await prismaClient.veiculo.findMany({
      where: {
        usuarioId: accountId, // Filtra todas as tarefas do usuário com o accountId
      },
      select: {
        id: true,
        marca: true,
        modelo: true,
        ano: true,
        placa: true
      },
    });
    console.log("ID linha 80", accountId)

    console.log("Veiculo encontradas:", vehicleById); // Debug

    if (!vehicleById || vehicleById.length === 0) {
      throw new Error("Nenhuma veículo encontrada para este usuário.");
    }

    return vehicleById;
  };

  // Atualiza um veículo
  async update({ marca, modelo, ano, placa, vehicleId }) {

    //Verificação de unicidade da placa
    if (placa) {
      const placaExiste = await prismaClient.veiculo.findFirst({
        where: {
          placa,
          id: { not: vehicleId } // Ignora o próprio veículo na busca
        }
      });

      // Se a placa já estiver em uso por outro veículo, lança um erro.
      if (placaExiste) {
        const error = new Error("Placa já cadastrada para outro veículo.");
        //* error.statusCode = 409;
        throw error;
      }
    }

    const updatedVehicle = await prismaClient.veiculo.update({
      where: { id: vehicleId },
      data: {
        marca,
        modelo,
        ano,
        placa, // Se a placa for undefined, o Prisma simplesmente a ignora.
        atividades: {
          create: {
            tipo: 'VEICULO',
            acao: 'ATUALIZADA',
            dataHora: new Date(),
          }
        },
      },
      include: { atividades: true } // Inclui as atividades no retorno
    });

    return updatedVehicle;
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
