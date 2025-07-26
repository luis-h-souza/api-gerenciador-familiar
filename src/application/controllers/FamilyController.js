class FamilyController {
  constructor(FamilyRepository) {
    this.FamilyRepository = FamilyRepository;
  }

  async handle({ body }) {
    const { id_familia, id_usuario, email } = body;
    console.log("controler", body)

    try {
      const result = await this.FamilyRepository.execute({ id_familia, id_usuario, email });
      return {
        statusCode: 200,
        body: {
          message: result.message,
          notification: result.notification, // retorna os dados completos da notificação
        },
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }
}

module.exports = { FamilyController };
