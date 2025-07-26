const { FamilyRepository } = require("../application/repositories/FamilyRepository");

function makeFamilyRepository() {
  return new FamilyRepository();
}

module.exports = { makeFamilyRepository };
