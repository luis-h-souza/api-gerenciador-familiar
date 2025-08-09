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

  // Cria uma tarefa
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
      if (error.message === 'Usuário não encontrado.') {
        throw error; // Relança o erro de usuário não encontrado
      }
      if (error.code === 'P2002') {
        // Erro de violação de unicidade (ex.: placa já existe, se placa for única no schema)
        throw new Error('A placa já está registrada.');
      }
      console.error('Erro ao criar veículo:', error);
      throw new Error('Erro interno ao criar veículo.');
    }
  }

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

  // deleta uma tarefa
  async delete({ id }) {
    const vehicleDelete = await prismaClient.veiculo.delete({
      where: { id },
    })
    return vehicleDelete;
  };

}

module.exports = { VehicleRepository };
