const array = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "11.11.2011",
  "11-2023",
  "31/4/2023",
  "30/2/2023",
  "29/2/2012",
  "31-6-2022",
  "30-6-2014",
];

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  const daysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === "2" && isLeapYear(year)) {
    return 29;
  }

  return daysArray[month - 1];
}

function isValidDate(dateArray) {
  const [day, month, year] = dateArray;

  const daysInCurrentMonth = getDaysInMonth(month, year);

  if (month < 1 || month > 12) {
    false;
  }

  if (day < 1 || day > daysInCurrentMonth) {
    return false;
  }
  return true;
}

function transformDateStringToArray(dateString) {
  let [day, month, year] = dateString.split("/");
  if (!year) {
    [day, month, year] = dateString.split("-");
  }
  if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }

  return [day, month, year];
}

function parseDates(datesArray) {
  return datesArray.reduce((datesArray, dateString) => {
    const dateArray = transformDateStringToArray(dateString);
    if (dateArray && isValidDate(dateArray)) {
      datesArray.push(transformDateStringToArray(dateString).join("-"));
    }
    return datesArray;
  }, []);
}

console.log(parseDates(array));
