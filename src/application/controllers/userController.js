const { z } = require('zod');

const schema = z.object({
  name: z.string().min(1, { message: 'O nome não deve ter no mínimo 01 caractere' }),
  email: z.string().email({ message: 'Formato de e-mail inválido' }).optional(),
  newEmail: z.string().email({ message: 'Formato de novo e-mail inválido' }).optional(),
});

// Schema para atualização de senha
const updatePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'A senha atual é obrigatória'),
  password: z.string().min(6, 'A nova senha deve ter pelo menos 6 caracteres'),
});

class UserController {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  };

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
  };

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
  async updatePassword({ body, params }) {
    const { id } = params;

    try {
      // Validar o body com Zod
      const { currentPassword, password } = updatePasswordSchema.parse(body);

      const result = await this.UserRepository.updatePassword({ id, currentPassword, password })

      console.log("RESULT ", result)

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

  async delete({ params }) {
    const { id } = params;

    try {
      await this.UserRepository.delete({ id })
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

      if (error.code === 'P2025') {
        return {
          statusCode: 404,
          body: { error: 'Usuário não encontrado!' },
        };
      }
      throw error;
    }
  };
}

module.exports = { UserController };
