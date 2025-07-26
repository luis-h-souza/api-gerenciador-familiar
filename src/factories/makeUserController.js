const { UserController } = require("../application/controllers/userController");
const { makeUserRepository } = require("./makeUserRepository");

function makeUserController() {
  const userController = makeUserRepository()

  return new UserController(userController)
}

module.exports = { makeUserController };
