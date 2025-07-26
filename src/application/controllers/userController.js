const { z } = require('zod');

const schema = z.object({
  name: z.string().min(1, { message: 'O nome não deve ter menos de 1 caractere' }),
  email: z.string().email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(val),
      {
        message:
          'A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número',
      }
    ),
});

class UserController {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  // lista usuário pelo ID
  async showById({ params}) {
  try {
    const foundUser = await this.UserRepository.showById({ id: params.id });
    console.log(foundUser)
    return {
      statusCode: 200,
      body: foundUser,
    };
  } catch (error) {
    if (error.message === 'Usuário não encontrado') {
      return {
        statusCode: 400,
        body: null,
      };
    }
    console.error('Erro inesperado:', error);
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
    console.error('Erro inesperado:', error);
  }
}

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
