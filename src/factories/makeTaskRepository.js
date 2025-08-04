const { TaskRepository } = require("../application/repositories/taskRepository");

function makeTaskRepository() {
  return new TaskRepository();
}

module.exports = { makeTaskRepository }
