function changeDisplayLimitPopup(action) {
  let limitPopup = document.querySelector(".popup-limit");

  if (action == "open") {
    return (limitPopup.style.display = "flex");
  }
  if (action == "close") {
    return (limitPopup.style.display = "none");
  }
}

module.exports.changeDisplayLimitPopup = changeDisplayLimitPopup;
