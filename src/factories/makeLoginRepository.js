const { LoginRepository } = require("../application/repositories/LoginRepository");

function makeLoginRepository() {
  return new LoginRepository();
}

module.exports = { makeLoginRepository };
