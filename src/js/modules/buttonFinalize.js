const { finalizeTask } = require("./finalizeTask");

function buttonFinalize() {
  let buttonChangeStatusTask = document.querySelectorAll(".task-finalize");
  buttonChangeStatusTask.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      let taskKey = element.parentElement.parentElement.dataset.key;
      finalizeTask(taskKey);
    });
  });
}

module.exports.buttonFinalize = buttonFinalize;
