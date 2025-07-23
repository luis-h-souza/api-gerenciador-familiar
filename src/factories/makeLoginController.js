const { LoginController } = require("../application/controllers/LoginController");
const { makeLoginRepository } = require("./makeLoginRepository");

function makeLoginController() {
  const loginController = makeLoginRepository();

  return new LoginController(loginController);
}

module.exports = { makeLoginController };
