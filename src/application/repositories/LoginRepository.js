const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { prismaClient } = require("../../libs/PrismaClient");
const { env } = require("../config/env");

class LoginRepository {
  async execute({ email, password }) {
    const account = await prismaClient.usuario.findUnique({
      where: { email },
    });
    const id = account.id

    if (!account) {
      throw new Error("Senha inválida");
    }

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      throw new Error("Senha inválida");
    }
    // Gera o token de acesso
    const accessToken = sign(
      { sub: account.id },
      env.jwtSecret,
      { expiresIn: "1d" }
    );

    return { id, accessToken };
  }
}

module.exports = { LoginRepository };
