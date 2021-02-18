function changeDisplayOverlay(action) {
  let overlay = document.querySelector(".overlay");

  if (action == "open") {
    return (overlay.style.width = "100%");
  }
  if (action == "close") {
    return (overlay.style.width = "0%");
  }
}

module.exports.changeDisplayOverlay = changeDisplayOverlay;
