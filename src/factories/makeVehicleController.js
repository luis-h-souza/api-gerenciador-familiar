const { VehicleController } = require("../application/controllers/vehicleController");
const { makeVehicleRepository } = require("./makeVehicleRepository");

function makeVehicleController() {
  const vehicleController = makeVehicleRepository()

  return new VehicleController(vehicleController)
}

module.exports = { makeVehicleController };
