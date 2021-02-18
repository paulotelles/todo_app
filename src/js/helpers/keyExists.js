function keyExists(keyNumber) {
  let keyIsValid = false;
  Object.keys(localStorage).forEach(function (key) {
    if (keyNumber == key) {
      keyIsValid = true;
    }
  });

  return keyIsValid;
}

module.exports.keyExists = keyExists;
