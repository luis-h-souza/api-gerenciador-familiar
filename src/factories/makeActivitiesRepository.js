const { ActivitiesRepository } = require("../application/repositories/ActivitiesRepository");

function makeActivitiesRepository() {
  return new ActivitiesRepository();
}

module.exports = { makeActivitiesRepository }
