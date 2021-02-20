const { cardExist } = require("../helpers/cardExist");

function deleteCard(taskKey) {
  document.querySelector(`[data-key="${taskKey}"]`).remove();
  let cards = document.querySelectorAll(".card");
  let anyCard = false;
  cards.forEach((card) => {
    if (card.style.display === "block") {
      anyCard = true;
    }
  });
  cardExist(anyCard);
}

module.exports.deleteCard = deleteCard;
