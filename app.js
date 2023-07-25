function shuffle(array) {
  const reversed = array.reverse();
  const temp = reversed[reversed.length - 2];
  reversed[reversed.length - 2] = reversed[reversed.length - 3];
  reversed[reversed.length - 3] = temp;
  return reversed;
}

function crypto(string) {
  const arrFromStr = string.split("");
  const firstHalfReversed = arrFromStr
    .slice(0, arrFromStr.length / 2)
    .reverse();
  const secondHalfShuffled = shuffle(arrFromStr.splice(arrFromStr.length / 2));
  return firstHalfReversed.concat(secondHalfShuffled).join("");
}

function check(password, string) {
  return password === crypto(string);
}

console.log(crypto("password"));
console.log(check("ssapdorw", "password"));
console.log(check("ssapdorw", "wrong"));
