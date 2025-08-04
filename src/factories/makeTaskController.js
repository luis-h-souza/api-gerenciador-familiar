const { TaskController } = require("../application/controllers/taskController");
const { makeTaskRepository } = require("./makeTaskRepository");

function makeTaskController() {
  const userController = makeTaskRepository()

  return new TaskController(userController)
}

module.exports = { makeTaskController };
