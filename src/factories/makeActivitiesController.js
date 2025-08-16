const { ActivitiesController } = require("../application/controllers/ActivitiesController");
const { makeActivitiesRepository } = require("./makeActivitiesRepository");

function makeActivitiesController() {
  const activitiesController = makeActivitiesRepository()

  return new ActivitiesController(activitiesController)
}

module.exports = { makeActivitiesController };
