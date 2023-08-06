const array = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "11.11.2011",
  "11-2023",
];

function isValidDate(dateString) {
  let separator;
  if (dateString[2] === "-") {
    separator = "-";
  } else if (dateString[2] === "/") {
    separator = "/";
  } else if (dateString[2] === ".") {
    separator = ".";
  } else {
    return false;
  }

  const date = dateString.split(separator);

  if (date.length !== 3) {
    return false;
  }
  const day = Number(date[0]);
  const month = Number(date[1]);
  const year = Number(date[2]);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }
  if (day < 1 || day > 31) {
    return false;
  }

  return true;
}

const validDates = array
  .filter((dateString) => isValidDate(dateString))
  .map((dateString) => {
    return dateString.split(dateString[2]).join("-");
  });
console.log(validDates);
