const { deleteCard } = require("./deleteCard");

function deleteTask(taskKey) {
  localStorage.removeItem(taskKey);
  return deleteCard(taskKey);
}

module.exports.deleteTask = deleteTask;
