function refreshCard(taskKey) {
  let card = document.querySelector(`[data-key="${taskKey}"]`);
  card.setAttribute("data-status", "Finalized");
  card.querySelector(".task-finalize").remove();
  if (
    document.querySelector('input[name="taskstatus"]:checked').value ===
    "active"
  ) {
    card.style.display = "none";
  }
}

module.exports.refreshCard = refreshCard;
