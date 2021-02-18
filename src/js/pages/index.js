const { createCard } = require("../modules/Createcard");
const { generateKey } = require("../helpers/generateKey");
const { createTask } = require("../modules/createTask");
const { changeDisplayOverlay } = require("../helpers/changeDisplayOverlay");
const { dateConvert } = require("../helpers/dateConvert");
const { refreshCardArea } = require("../modules/refreshCardArea");
const { finalizeTask } = require("../modules/finalizeTask");
const { buttonFinalize } = require("../modules/buttonFinalize");
const { radioFilter } = require("../modules/radioFilter");
const { searchFilter } = require("../modules/searchFilter");

refreshCardArea();

let mybutton = document.querySelector(".newtask-form");
mybutton.addEventListener("submit", (event) => {
  event.preventDefault();

  let taskKey = generateKey(1, 10);

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
  changeDisplayOverlay("open");
});

let radioButton = document.querySelectorAll('input[name="taskstatus"]');
radioButton.forEach((element) => {
  element.addEventListener("change", (event) => {
    if (element.checked) {
      return radioFilter(element.value);
    }
  });
});

let searchField = document.querySelector(".search-input");
searchField.addEventListener("input", (event) => {
  console.log(searchField.value);
  searchFilter(searchField.value);
});
