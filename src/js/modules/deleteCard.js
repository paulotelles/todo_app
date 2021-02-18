function deleteCard(taskKey) {
  return document.querySelector(`[data-key="${taskKey}"]`).remove();
}

module.exports.deleteCard = deleteCard;
