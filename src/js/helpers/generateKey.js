const { randomGenerate } = require("../helpers/randomGenerate");
const { keyExists } = require("../helpers/keyExists");

function generateKey(min, max) {
  let newKey = randomGenerate(min, max);

  while (keyExists(newKey)) {
    newKey = randomGenerate(min, max);
  }

  return newKey;
}

module.exports.generateKey = generateKey;
