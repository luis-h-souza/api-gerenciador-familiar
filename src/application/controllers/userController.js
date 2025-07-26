const { z } = require('zod');

const schema = z.object({
  name: z.string().min(1, { message: 'O nome não deve ter no mínimo 01 caractere' }),
  email: z.string().email({ message: 'Formato de e-mail inválido' }).optional(),
  newEmail: z.string().email({ message: 'Formato de novo e-mail inválido' }).optional(),
  currentPassword: z.string().min(1, { message: 'Senha atual é obrigatória' }).optional(),
  newPassword: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
      {
        message: 'A senha deve ter pelo menos 6 caracteres, com uma letra maiúscula, uma minúscula e um número',
      }
    ),
});

class UserController {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  // lista usuário pelo ID
  async showById({ params }) {
    const { id } = params;

    try {
      const foundUser = await this.UserRepository.showById({ id: params.id });

      return {
        statusCode: 200,
        body: foundUser,
      };

    } catch (error) {

      if (!id) {
        return {
          statusCode: 401,
          body: { message: "Usuário não autenticado" },
        };
      };

      if (error.message === 'Usuário não encontrado') {
        return {
          statusCode: 400,
          body: { message: "Usuário não encontrado" },
        };
      }
    }
  }

  // lista todos os usuários
  async show() {
    try {
      const user = await this.UserRepository.show();
      console.log(user)
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      if (error.message === 'Usuário não encontrado') {
        return {
          statusCode: 400,
          body: null,
        };
      }
    }
  };

  // Atualiza usuário
  async update({ body, params }) {
    const { id } = params;

    try {
      // Validar o body com Zod
      const { name, email } = schema.parse(body);
      const result = await this.UserRepository.update({ name, email, id })

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
      throw error;
    }
  };

  // Atualiza senha


  async handle({ body, user, params }) {
    console.log(params)
    try {
      const { id } = params;
      // Usa o ID do usuário autenticado se nenhum ID for fornecido
      const userId = id || user.id;

      // Verifica se o usuário está autenticado
      if (!id) {
        return {
          statusCode: 401,
          body: { message: "Usuário não autenticado" },
        };
      }

      if (!userId) {
        return {
          statusCode: 400,
          body: { success: false, message: 'ID do usuário não fornecido' },
        };
      }

      // O parse do zod já valida os dados, então não precisamos validar novamente
      const { name, email, password } = schema.parse(body);

      // Executa o caso de uso do cadastro
      const updatedUser = await this.UserRepository.execute({
        name,
        email,
        password
      });

      return {
        statusCode: 200,
        body: { success: true, data: updatedUser },
      };

    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { success: false, errors: error.issues },
        };
      }
      if (error.message === 'Email já cadastrado') {
        return {
          statusCode: 409,
          body: { success: false, message: 'Este e-mail já está em uso' },
        };
      }
      if (error.message === 'Usuário não encontrado') {
        return {
          statusCode: 404,
          body: { success: false, message: 'Usuário não encontrado' },
        };
      }
      console.error('Erro inesperado:', error);
      return {
        statusCode: 500,
        body: { success: false, message: 'Erro interno do servidor' },
      };
    }
  }
}

module.exports = { UserController };
