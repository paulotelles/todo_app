function cardExist(value) {
  if (value) {
    return (document.querySelector(".nocard-filter").style.display = "none");
  }
  return (document.querySelector(".nocard-filter").style.display = "block");
}

module.exports.cardExist = cardExist;
