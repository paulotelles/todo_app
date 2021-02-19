function noCardText() {
  let cardArea = document.querySelector(".mainarea-cardarea");
  if (cardArea.innerHTML == "") {
    return (document.querySelector(
      ".mainarea-cardarea"
    ).innerHTML = `<p class="nocard-insert"> Não existem tarefas cadastradas </p>
        `);
  }
}
module.exports.noCardText = noCardText;
