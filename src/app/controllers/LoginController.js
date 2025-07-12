const { prismaClient } = require("../../libs/PrismaClient")

class LoginController {

  //* listar todos os usuários
  async index(request, reply) {
    const users = await prismaClient.user.findMany()

    return reply.send(users)
  }

  //* cria um novo usuário


}

module.exports = new LoginController()
