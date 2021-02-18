const { createTask } = require("./createTask");
const { refreshCard } = require("./refreshCard");

function finalizeTask(taskKey) {
  let task = JSON.parse(localStorage.getItem(taskKey));
  task.Status = "Finalized";
  createTask(taskKey, task);
  return refreshCard(taskKey);
}

module.exports.finalizeTask = finalizeTask;
