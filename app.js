function currencyConverter(amount, from, to) {
  const exchangeRatesFromUSD = {
    USD: 1.0,
    EUR: 0.9,
    GBP: 0.78,
    RMB: 7.19,
    RUB: 90.5,
    JPY: 141.79,
  };

  if (!exchangeRatesFromUSD[from] || !exchangeRatesFromUSD[to]) {
    console.log("Неподдерживаемая конвертация");
  }

  const amountInUSD = amount / exchangeRatesFromUSD[from];
  const result = amountInUSD * exchangeRatesFromUSD[to];

  return Number(result.toFixed(2));
}

const amount = prompt("Введите сумму");
const currencyFrom = prompt("Введите код исходной валюты (Например: RUB, USD)").toUpperCase();
const currencyTo = prompt("Введите код конечной валюты (Например: RUB, USD)").toUpperCase();
const convertedAmount = currencyConverter(amount, currencyFrom, currencyTo);


if (convertedAmount) {
  console.log(
    `${amount} ${currencyFrom} равно ${convertedAmount} ${currencyTo}`
  );
}
