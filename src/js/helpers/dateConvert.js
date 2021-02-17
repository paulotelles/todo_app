function dateConvert(date) {
  let newDate = date.split("-");
  return newDate[2] + "/" + newDate[1] + "/" + newDate[0];
}

module.exports.dateConvert = dateConvert;
