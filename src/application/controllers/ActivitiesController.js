class ActivitiesController {
  constructor(ActivitiesRepository) {
    this.ActivitiesRepository = ActivitiesRepository;
  }
  // lista toda as atividades
  async show() {
    try {
      const activities = await this.ActivitiesRepository.show();
      console.log(activities)
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

}

module.exports = { ActivitiesController };
