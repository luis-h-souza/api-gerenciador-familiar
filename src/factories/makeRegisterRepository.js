const { RegisterRepository } = require("../application/repositories/RegisterRepository");

function makeRegisterRepository() {
  const SALT = 10;
  // cria uma instância do repository de register com o salt definido
  return new RegisterRepository(SALT);
}

module.exports = { makeRegisterRepository };
