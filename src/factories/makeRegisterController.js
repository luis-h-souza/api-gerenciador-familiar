const { RegisterController } = require("../application/controllers/RegisterController");
const { makeRegisterRepository } = require("./makeRegisterRepository");

function makeRegisterController() {
  const registerRepository = makeRegisterRepository();

  return new RegisterController(registerRepository);
}

module.exports = { makeRegisterController };
