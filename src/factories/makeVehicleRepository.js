const { VehicleRepository } = require("../application/repositories/vehicleRepository");

function makeVehicleRepository() {
  return new VehicleRepository();
}

module.exports = { makeVehicleRepository }
