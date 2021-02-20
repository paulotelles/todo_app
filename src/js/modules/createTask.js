function createTask(keyStorage, valueStorage) {
  return localStorage.setItem(keyStorage, JSON.stringify(valueStorage));
}

module.exports.createTask = createTask;
