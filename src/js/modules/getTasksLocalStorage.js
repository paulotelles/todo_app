function getTasksLocalStorage() {
  let taskList = [];
  Object.keys(localStorage).forEach(function (key) {
    taskList.push({
      taskKey: key,
      taskContent: JSON.parse(localStorage.getItem(key)),
    });
  });

  return taskList;
}

module.exports.getTasksLocalStorage = getTasksLocalStorage;
