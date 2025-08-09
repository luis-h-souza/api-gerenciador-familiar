const { prismaClient } = require("../../libs/PrismaClient");

// Função para validar UUID
const isValidUUID = (str) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return typeof str === 'string' && uuidRegex.test(str);
};

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

  // lista todas os veículo
  async show() {
    const allVehicles = await prismaClient.veiculo.findMany();

    if (!allVehicles.length) {
      throw new Error("Usuário não encontrado");
    }
    return allVehicles;
  };

  // Atualiza um veículo
  async update({ descricao, status, tarefaId }) {

    // Valida a descrição
    if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
      throw new Error('A descrição é obrigatória e não deve ser um texto vazio.');
    }
    if (descricao.length > 255) {
      throw new Error('A descrição deve ter no máximo 255 caracteres.');
    }

    // Valida o usuarioId como UUID
    if (!tarefaId || !isValidUUID(tarefaId)) {
      throw new Error('O ID da tarefa é obrigatório e deve ser um UUID válido.');
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

  // deleta um veículo
  async delete({ id }) {
    const result = await prismaClient.$transaction(async (tx) => {
      const vehicleDelete = await tx.veiculo.delete({
        where: { id },
      });

      await tx.atividade.create({
        data: {
          tipo: 'VEICULO',
          acao: 'EXCLUIDA',
          dataHora: new Date(),
          veiculoId: id,
        }
      });
      return vehicleDelete;
    });
    return result;
  };

}

module.exports = { VehicleRepository };
