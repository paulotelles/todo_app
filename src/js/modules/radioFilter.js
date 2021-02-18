const { searchFilter } = require("./searchFilter");

function radioFilter(value) {
  let allCards = document.querySelectorAll(".card");
  let finalizedCards = document.querySelectorAll(
    '.card[data-status="Finalized"]'
  );
  let activeCards = document.querySelectorAll('.card[data-status="Active"]');

  let searchField = document.querySelector(".search-input");
  searchField.value = "";

  if (value === "all") {
    return allCards.forEach((card) => {
      card.style.display = "block";
    });
  }
  if (value === "active") {
    finalizedCards.forEach((card) => {
      card.style.display = "none";
    });
    return activeCards.forEach((card) => {
      card.style.display = "block";
    });
  }
  if (value === "finalized") {
    activeCards.forEach((card) => {
      card.style.display = "none";
    });
    return finalizedCards.forEach((card) => {
      card.style.display = "block";
    });
  }
}

module.exports.radioFilter = radioFilter;
