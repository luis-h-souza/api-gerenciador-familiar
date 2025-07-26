const { hash } = require("bcryptjs");
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
  }

  async show() {
    const allUser = await prismaClient.usuario.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true
      }
    })
    if (!allUser) {
      throw new Error("Usuário não encontrado");
    }
    return allUser;
  }

  async execute({ name, email, password, id }) {
    // Verifica se o email já está cadastrado
    const account = await prismaClient.usuario.findUnique({
      where: { email },
    });

    if (account) {
      throw new Error("Email já cadastrado");
    }

    const hashedPassword = await hash(password, this.salt);

    try {
      // Edita um usuário
      const updateUser = await prismaClient.usuario.update({
        // Busca o usuário pelo ID
        where: { id },
        // Atualiza os campos do usuário
        data: {
          name,
          email,
          password: hashedPassword || undefined, // Não atualiza password se não fornecido
        },
      })
      return updateUser;

    } catch (error) {
      if (error.code === 'P2025') {
        return null; // Usuário não encontrado
      }
      throw error;
    }
  }
}

module.exports = { UserRepository };
