const { deleteTask } = require("./deleteTask");

function buttonDelete() {
  let buttonChangeStatusTask = document.querySelectorAll(".task-delete");
  buttonChangeStatusTask.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      let taskKey = element.parentElement.parentElement.dataset.key;
      deleteTask(taskKey);
    });
  });
}

module.exports.buttonDelete = buttonDelete;
