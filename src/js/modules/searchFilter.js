function searchFilter(string) {
  console.log(`Entraou toma a string: ${string}`);
  let radioFilter = document.querySelector('input[name="taskstatus"]:checked');
  console.log(radioFilter);

  if (radioFilter.value === "active") {
    let activeCards = document.querySelectorAll('.card[data-status="Active"]');
    activeCards.forEach((card) => {
      console.log(card.querySelector(".card-text").innerHTML);
      if (card.querySelector(".card-text").innerHTML.includes(string)) {
        return (card.style.display = "block");
      }
      return (card.style.display = "none");
    });
  }
  if (radioFilter.value === "finalized") {
    let finalizedCards = document.querySelectorAll(
      '.card[data-status="Finalized"]'
    );
    finalizedCards.forEach((card) => {
      if (card.querySelector(".card-text").innerHTML.includes(string)) {
        return (card.style.display = "block");
      }
      return (card.style.display = "none");
    });
  }

  if (radioFilter.value === "all") {
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      if (card.querySelector(".card-text").innerHTML.includes(string)) {
        return (card.style.display = "block");
      }
      return (card.style.display = "none");
    });
  }
}

module.exports.searchFilter = searchFilter;
