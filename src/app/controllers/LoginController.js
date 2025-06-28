const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

class LoginController {

  //* listar todos os usuários
  async index(request, response) {
    const users = await prisma.user.findMany()

    return response.send(users)
  }

  //* cria um novo usuário
  async function createUser(request, response) {
    const user = await prisma.user.create({
    data: {
      name: 'Elsa Prisma',
      email: 'elsa@prisma.io',
      password: '123456'
    },
  })

    return response.send(user)
  }

}

module.exports = new LoginController()
