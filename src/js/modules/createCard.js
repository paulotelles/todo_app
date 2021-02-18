function createCard(taskDate, taskText, taskStatus, taskKey) {
  let cardarea = document.querySelector(".mainarea-cardarea");
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-status", `${taskStatus}`);
  card.setAttribute("data-key", `${taskKey}`);
  card.innerHTML = `<div class="card-hover">
    <button class="card-button task-delete">
      <img src="./src/img/trash.png" alt="" class="card-button-img" />
    </button>
    ${
      taskStatus === "Finalized"
        ? ""
        : `    <button class="card-button task-finalize">
    <img src="./src/img/correct.png" alt="" class="card-button-img" />
  </button>`
    }

  </div>
  <div class="card-header">
    <img src="./src/img/calendar.png" />
    <h3 class="card-date">${taskDate}</h3>
  </div>
  <p class="card-text">${taskText}</p>`;

  return cardarea.appendChild(card);
}

module.exports.createCard = createCard;
