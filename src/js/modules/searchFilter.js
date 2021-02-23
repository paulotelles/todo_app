const { cardExist } = require("../helpers/cardExist");

function searchFilter(string) {
  let radioFilter = document.querySelector('input[name="taskstatus"]:checked');

  if (radioFilter.value === "active") {
    let activeCards = document.querySelectorAll('.card[data-status="Active"]');
    let anyCard = false;
    activeCards.forEach((card) => {
      if (card.querySelector(".card-text").innerHTML.includes(string)) {
        anyCard = true;
        return (card.style.display = "flex");
      }
      return (card.style.display = "none");
    });
    cardExist(anyCard);
  }
  if (radioFilter.value === "finalized") {
    let finalizedCards = document.querySelectorAll(
      '.card[data-status="Finalized"]'
    );
    let anyCard = false;
    finalizedCards.forEach((card) => {
      if (card.querySelector(".card-text").innerHTML.includes(string)) {
        anyCard = true;
        return (card.style.display = "flex");
      }
      return (card.style.display = "none");
    });
    cardExist(anyCard);
  }

  if (radioFilter.value === "all") {
    let allCards = document.querySelectorAll(".card");
    let anyCard = false;
    allCards.forEach((card) => {
      if (card.querySelector(".card-text").innerHTML.includes(string)) {
        anyCard = true;
        return (card.style.display = "flex");
      }
      return (card.style.display = "none");
    });
    cardExist(anyCard);
  }
}

module.exports.searchFilter = searchFilter;
