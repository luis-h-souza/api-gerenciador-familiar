const { hash } = require("bcryptjs");
const { prismaClient } = require("../../libs/PrismaClient");

const SALT = 10;

class RegisterRepository {
  constructor(salt = SALT) {
    this.salt = salt;
  }

  async execute({ email, name, password }) {
    const accountsAlreadExists = await prismaClient.usuario.findUnique({
      where: {
        email,
      },
    });

    if (accountsAlreadExists) {
      throw new Error("Email já cadastrado");
    }

    const hashedPassword = await hash(password, this.salt);

    await prismaClient.usuario.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}

module.exports = { RegisterRepository };
