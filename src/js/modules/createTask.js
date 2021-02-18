function createTask(keyStorage, valueStorage) {
  let taskStorage = localStorage;
  return localStorage.setItem(keyStorage, JSON.stringify(valueStorage));
}

module.exports.createTask = createTask;
