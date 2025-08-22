class ActivitiesController {
  constructor(ActivitiesRepository) {
    this.ActivitiesRepository = ActivitiesRepository;
  }
  // lista toda as atividades
  async show() {
    try {
      const activities = await this.ActivitiesRepository.show();
      return {
        statusCode: 200,
        body: activities,
      };
    } catch (error) {
      if (error.message === 'Atividades não encontradas.') {
        return {
          statusCode: 400,
          body: null,
        };
      }
    }
  };

  async showById(userId) {
    try {
      const activities = await this.ActivitiesRepository.showById(userId);
      return {
        statusCode: 200,
        body: activities,
      };
    } catch (error) {
      if (error.message === 'Nenhuma atividade encontrada para o usuário.') {
        return {
          statusCode: 404,
          body: null,
        };
      }
      return {
        statusCode: 500,
        body: null,
      };
    }
  };

}

module.exports = { ActivitiesController };
