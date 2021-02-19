const { noCardText } = require("./noCardText");

function deleteCard(taskKey) {
  document.querySelector(`[data-key="${taskKey}"]`).remove();
  return noCardText();
}

module.exports.deleteCard = deleteCard;
