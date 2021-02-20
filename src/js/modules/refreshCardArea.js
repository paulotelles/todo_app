const { cardExist } = require("../helpers/cardExist");
const { dateConvert } = require("../helpers/dateConvert");
const { buttonDelete } = require("./buttonDelete");
const { buttonFinalize } = require("./buttonFinalize");
const { clearFilters } = require("./clearFilters");
const { createCard } = require("./Createcard");
const { getTasksLocalStorage } = require("./getTasksLocalStorage");

function refreshCardArea() {
  let cardArea = document.querySelector(".mainarea-cardarea");
  cardArea.innerHTML = "";
  let cardList = getTasksLocalStorage();

  cardList.sort((a, b) => {
    return new Date(a.taskContent.Date) - new Date(b.taskContent.Date);
  });

  cardList.forEach((element) => {
    return createCard(
      dateConvert(element.taskContent.Date),
      element.taskContent.Text,
      element.taskContent.Status,
      element.taskKey
    );
  });

  if (cardList.length <= 0) {
    cardExist(false);
  }
  clearFilters();
  buttonFinalize();
  buttonDelete();
}

module.exports.refreshCardArea = refreshCardArea;
