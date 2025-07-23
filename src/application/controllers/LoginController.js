const { z } = require("zod");

// Define Zod schema for input validation
const InputSchema = z.object({
  email: z.email({ message: "Formato de e-mail inválido" }),
  password: z.string().min(1, { message: "A senha não pode ser vazia" }),
});

class LoginController {
  // Receives the LoginRepository as a dependency
  constructor(LoginRepository) {
    this.LoginRepository = LoginRepository;
  }
  // Handles the login request
  async handle({ body }) {
    try {
      // validação de entrada usando o Zod
      const { email, password } = InputSchema.parse(body);
      // executa o método do repository de login
      const result = await this.LoginRepository.execute({ email, password });

      console.log(result)

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

      if (error instanceof Error && error.message === "Senha inválida") {
        return {
          statusCode: 401, // Unauthorized
          body: { message: error.message },
        };
      }

      console.error("Erro inesperado:", error);
      throw error;
    }
  }
}

module.exports = { LoginController };
