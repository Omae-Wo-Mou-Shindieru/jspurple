const password = "password";

function shuffle(array) {
  const reversed = array.reverse();
  const temp = reversed[reversed.length - 2];
  reversed[reversed.length - 2] = reversed[reversed.length - 3];
  reversed[reversed.length - 3] = temp;
  return reversed;
}

function crypto(string) {
  if (string.length < 8) {
    console.log("Пароль должен состоять из минимум 8 знаков");
  }
  const arrFromStr = string.split("");
  const firstHalf = arrFromStr.slice(0, arrFromStr.length / 2);
  const secondHalf = arrFromStr.splice(arrFromStr.length / 2);
  const strReversed = firstHalf.reverse();
  const strShuffled = shuffle(secondHalf);
  return strReversed.concat(strShuffled).join("");
}

function check(string, string) {
}
