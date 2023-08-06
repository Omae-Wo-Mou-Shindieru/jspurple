const cardNumber = "4561-2612-1234-5464";
const cardNumber2 = "4561-2612-1234-5467";

function sanitizeCardNumber(cardNumber) {
  const result = [...cardNumber].filter((char) => !isNaN(char)).join("");
  return result;
}
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
  return sum % 10 === 0;
}

console.log(
  `Номер карты ${cardNumber} ${
    validateLuhn(sanitizeCardNumber(cardNumber))
      ? "введен верно"
      : "введен неверно"
  }`
);
console.log(
  `Номер карты ${cardNumber2} ${
    validateLuhn(sanitizeCardNumber(cardNumber2))
      ? "введен верно"
      : "введене неверно"
  }`
);
