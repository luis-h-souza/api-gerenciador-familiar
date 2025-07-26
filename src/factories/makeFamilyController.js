const { FamilyController } = require("../application/controllers/FamilyController");

function makeFamilyController(FamilyRepository) {
  return new FamilyController(FamilyRepository);
}

module.exports = { makeFamilyController }
