function refreshCard(taskKey) {
  let card = document.querySelector(`[data-key="${taskKey}"]`);
  card.classList.add("finalized");
  card.querySelector(".task-finalize").remove();
}

module.exports.refreshCard = refreshCard;
