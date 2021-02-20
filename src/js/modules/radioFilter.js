function radioFilter(value) {
  let allCards = document.querySelectorAll(".card");
  let cardArea = document.querySelector(".mainarea-cardarea");
  let finalizedCards = document.querySelectorAll(
    '.card[data-status="Finalized"]'
  );
  let activeCards = document.querySelectorAll('.card[data-status="Active"]');

  let searchField = document.querySelector(".search-input");
  searchField.value = "";

  if (value === "all") {
    console.log(allCards);
    console.log(allCards.length);
    if (allCards.length > 0) {
      return allCards.forEach((card) => {
        card.style.display = "block";
        document.querySelector(".nocard-filter").style.display = "none";
      });
    }
    return (document.querySelector(".nocard-filter").style.display = "block");
  }
  if (value === "active") {
    finalizedCards.forEach((card) => {
      card.style.display = "none";
    });
    if (activeCards.length > 0) {
      return activeCards.forEach((card) => {
        card.style.display = "block";
        document.querySelector(".nocard-filter").style.display = "none";
      });
    }
    return (document.querySelector(".nocard-filter").style.display = "block");
  }
  if (value === "finalized") {
    activeCards.forEach((card) => {
      card.style.display = "none";
    });
    if (finalizedCards.length > 0) {
      return finalizedCards.forEach((card) => {
        card.style.display = "block";
        document.querySelector(".nocard-filter").style.display = "none";
      });
    }
    return (document.querySelector(".nocard-filter").style.display = "block");
  }
}

module.exports.radioFilter = radioFilter;
