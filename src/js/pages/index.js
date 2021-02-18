const { createCard } = require("../modules/Createcard");
const { generateKey } = require("../helpers/generateKey");
const { createTask } = require("../modules/createTask");
const { changeDisplayOverlay } = require("../helpers/changeDisplayOverlay");
const { dateConvert } = require("../helpers/dateConvert");
const { refreshCardArea } = require("../modules/refreshCardArea");
const { finalizeTask } = require("../modules/finalizeTask");
const { buttonFinalize } = require("../modules/buttonFinalize");

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
