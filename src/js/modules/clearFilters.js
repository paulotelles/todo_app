function clearFilters() {
  console.log("entrou no clear");
  document.querySelector(".search-input").value = "";
  document.querySelector('input[type="radio"][id="finalized"]').checked = true;
  document.querySelector('input[type="radio"][id="active"]').checked = true;
  document.querySelector('input[type="radio"][id="all"]').checked = true;
}

module.exports.clearFilters = clearFilters;
