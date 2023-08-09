const cardNumber = "4561-2612-1234-5464";
const cardNumber2 = "4561-2612-1234-5467";
const cardNumber3 = "7992-7398-713";
const cardNumber4 = "7992-7398-714";

function validateLuhn(cardNumber) {
  let sum = 0;
  const nDigits = cardNumber.length;
  let parity = nDigits % 2;
  for (let i = 0; i < nDigits; i++) {
    let digit = Number(cardNumber[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
    console.log(sum);
  return sum % 10 === 0;
}

console.log(
  `Номер карты ${cardNumber} ${
    validateLuhn(cardNumber.replaceAll("-", ""))
      ? "введен верно"
      : "введен неверно"
  }`
);
console.log(
  `Номер карты ${cardNumber2} ${
    validateLuhn(cardNumber2.replaceAll("-", ""))
      ? "введен верно"
      : "введен неверно"
  }`
);
console.log(
  `Номер карты ${cardNumber3} ${
    validateLuhn(cardNumber3.replaceAll("-", ""))
      ? "введен верно"
      : "введен неверно"
  }`
);
console.log(
  `Номер карты ${cardNumber4} ${
    validateLuhn(cardNumber4.replaceAll("-", ""))
      ? "введен верно"
      : "введен неверно"
  }`
);
