const { z } = require("zod");

// Define o esquema Zod para validação de entrada
const schema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.email({ message: "Formato de e-mail inválido" }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

class RegisterController {
  // Recebe o repositório de registro como dependência
  // Isso permite que o controlador seja testável e desacoplado da implementação específica do repositório
  // O repositório deve implementar o método execute que recebe os dados de registro
  constructor(RegisterRepository) {
    this.RegisterRepository = RegisterRepository || new RegisterRepository();
  }

  // Implementação do método handle que recebe a requisição
  async handle({ body }) {
    try {
      // O parse do zod já valida os dados, então não precisamos validar novamente
      const { name, email, password } = schema.parse(body);
      // Executa o caso de uso do cadastro
      await this.RegisterRepository.execute({
        name,
        email,
        password
      });

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

      if (error instanceof Error && error.message === "Email já cadastrado") {
        return {
          statusCode: 409,
          body: {
            message: "Este e-mail já está em uso.",
          },
        };
      }
      // Se for outro tipo de erro, lança novamente
      console.error("Erro inesperado:", error);
      throw error;
    }
  }
}

module.exports = { RegisterController };
