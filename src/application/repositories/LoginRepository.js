const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { prismaClient } = require("../../libs/PrismaClient");

class LoginRepository {
  async execute({ email, password }) {
    const account = await prismaClient.usuario.findUnique({
      where: { email },
    });

    if (!account) {
      throw new Error("Senha inválida");
    }

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      throw new Error("Senha inválida");
    }

    const accessToken = sign(
      { sub: account.id },
      env.jwtSecret,
      { expiresIn: "1d" }
    );

    return { accessToken };
  }
}

module.exports = { LoginRepository };
