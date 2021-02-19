function noFilterCard() {
  let cards = document.querySelectorAll(".card");
  let cardShow = false;
  let noCardMessage = document.querySelector(".nocard-filter");
  cards.forEach((element) => {
    if (element.style.display === "block") {
      cardShow = true;
    }
  });
  if (!cardShow) {
    return (noCardMessage.style.display = "block");
  }
  if (cardShow) {
    return (noCardMessage.style.display = "none");
  }
}

module.exports.noFilterCard = noFilterCard;
