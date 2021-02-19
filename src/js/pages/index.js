const { generateKey } = require("../helpers/generateKey");
const { createTask } = require("../modules/createTask");
const { changeDisplayOverlay } = require("../helpers/changeDisplayOverlay");
const { refreshCardArea } = require("../modules/refreshCardArea");
const { radioFilter } = require("../modules/radioFilter");
const { searchFilter } = require("../modules/searchFilter");
const { noFilterCard } = require("../modules/noFilterCard");
const { keyLimit } = require("../helpers/keyLimit");
const {
  changeDisplayLimitPopup,
} = require("../helpers/changeDisplayLimitPopup");

refreshCardArea();

let mybutton = document.querySelector(".newtask-form");
mybutton.addEventListener("submit", (event) => {
  event.preventDefault();

  let taskKey = generateKey(1, 20);

  createTask(taskKey, {
    Date: document.getElementById("newtask-date").value,
    Text: document.getElementById("newtask-title").value,
    Status: "Active",
  });

  document.querySelector(".newtask-form").reset();
  changeDisplayOverlay("close");
  refreshCardArea();
});

let buttonCancel = document.querySelector(".newtask-cancel");
buttonCancel.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".newtask-form").reset();
  changeDisplayOverlay("close");
});

let buttonNewTask = document.querySelector(".newtask-btn");
buttonNewTask.addEventListener("click", (event) => {
  event.preventDefault();
  if (keyLimit(20)) {
    changeDisplayLimitPopup("open");
  } else {
    changeDisplayLimitPopup("close");
  }
  return changeDisplayOverlay("open");
});

let radioButton = document.querySelectorAll('input[name="taskstatus"]');
radioButton.forEach((element) => {
  element.addEventListener("change", (event) => {
    if (element.checked) {
      radioFilter(element.value);
      noFilterCard();
    }
  });
});

let searchField = document.querySelector(".search-input");
searchField.addEventListener("input", (event) => {
  searchFilter(searchField.value);
  noFilterCard();
});

let closeButton = document.querySelector(".limittask-cancel");
closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  return changeDisplayOverlay("close");
});
