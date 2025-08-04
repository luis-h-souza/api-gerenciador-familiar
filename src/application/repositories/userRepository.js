const { hash, compare } = require("bcryptjs");
const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class UserRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  async showById({ id }) {
    const userById = await prismaClient.usuario.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        password: true
      }
    })

    if (!userById) {
      throw new Error("Usuário não encontrado");
    }
    return userById;
  };

  async show() {
    const allUser = await prismaClient.usuario.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      }
    })
    if (!allUser) {
      throw new Error("Usuário não encontrado");
    }
    return allUser;
  };

  async update({ name, email, newEmail, id }) {
    // Verifica se já existe outro usuário com o mesmo e-mail
    const account = await prismaClient.usuario.findUnique({
      where: {
        email,
        NOT: { id }, // Garante que não é o próprio usuário
      },
    });

    if (account) {
      console.log("account exits ", account.email)
      throw new Error("Email já cadastrado");
    }

    const updateUser = await prismaClient.usuario.update({
      where: { id },
      data: { name, email },
    });
    console.log("newEmail", newEmail, updateUser.email, updateUser.newEmail, updateUser)
    return updateUser;
  };

  async updatePassword({ id, currentPassword, password }) {
    try {
      // Buscar o usuário e sua senha hasheada
      const user = await this.showById({
        where: { id },
        select: {
          password: true
        }
      })

      if (!user) {
        throw new Error('Usuário não encontrado.');
      }
      // Verificar se a senha atual está correta
      const isPasswordValid = await compare(currentPassword, user.password);

      if (!isPasswordValid) {
        throw new Error("Senha atual incorreta.");
      }

      // Gerar um novo hash para a nova senha
      const hashedPassword = await hash(password, 10);

      // Atualizar o hash da senha no banco de dados
      const updatedPassword = await prismaClient.usuario.update({
        where: { id },
        data: {
          password: hashedPassword,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return updatedPassword;

    } catch (error) {
      throw new Error(`Erro ao atualizar a senha: ${error.message}`);
    }
  };

  async delete({ id }) {
    const userDelete = await prismaClient.usuario.delete({
      where: { id },
    })
    return userDelete;
  };

}

module.exports = { UserRepository };
