const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class ActivitiesRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  // Lista todas os veículo
  async show() {
    const allActivities = await prismaClient.atividade.findMany({
      take: 5,
      orderBy: {
        dataHora: 'desc'
      },
    });

    if (!allActivities.length) {
      throw new Error("Atividades não encontradas.");
    }
    return allActivities;
  };
}

module.exports = { ActivitiesRepository };
