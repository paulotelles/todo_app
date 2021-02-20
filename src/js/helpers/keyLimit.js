function keyLimit(totalKeys) {
  if (localStorage.length >= totalKeys) {
    return true;
  }
  return false;
}

module.exports.keyLimit = keyLimit;
