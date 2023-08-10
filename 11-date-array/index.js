const array = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "11.11.2011",
  "11-2023",
];

function transformDateStringToArray(dateString) {
  let [day, month, year] = dateString.split("/");
  if (!year) {
    [day, month, year] = dateString.split("-");
  }
  if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }
  if (month < 1 || month > 12) {
    return null;
  }
  if (day < 1 || day > 31) {
    return null;
  }
  return [day, month, year];
}

function parseDates(datesArray) {
  return datesArray.reduce((datesArray, dateString) => {
    if (transformDateStringToArray(dateString)) {
      datesArray.push(transformDateStringToArray(dateString).join("-"));
    }
    return datesArray;
  }, []);
}

console.log(parseDates(array));
