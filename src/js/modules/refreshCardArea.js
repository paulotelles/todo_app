const { dateConvert } = require("../helpers/dateConvert");
const { buttonFinalize } = require("./buttonFinalize");
const { createCard } = require("./Createcard");
const { getTasksLocalStorage } = require("./getTasksLocalStorage");

function refreshCardArea() {
  let cardArea = document.querySelector(".mainarea-cardarea");
  cardArea.innerHTML = "";
  let cardList = getTasksLocalStorage();

  cardList.forEach((element) => {
    return createCard(
      dateConvert(element.taskContent.Date),
      element.taskContent.Text,
      element.taskContent.Status,
      element.taskKey
    );
  });
  buttonFinalize();
}

module.exports.refreshCardArea = refreshCardArea;
