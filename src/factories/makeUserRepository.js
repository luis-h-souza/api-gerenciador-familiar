const { UserRepository } = require("../application/repositories/userRepository");

function makeUserRepository() {
  return new UserRepository();
}

module.exports = { makeUserRepository }
