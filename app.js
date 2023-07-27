function crypto(string) {
  const arrFromStr = string.split("");
  if (arrFromStr.length < 4) {
    return "Слишком короткий пароль";
  }
  const firstHalfReversed = arrFromStr
    .splice(0, arrFromStr.length / 2)
    .reverse();
  const temp = arrFromStr[0];
  arrFromStr[0] = arrFromStr[arrFromStr.length - 1];
  arrFromStr[arrFromStr.length - 1] = temp;
  return firstHalfReversed.concat(arrFromStr).join("");
}

function check(password, string) {
  return password === crypto(string);
}

console.log(crypto("password"));
console.log(crypto("pass"));
console.log(crypto("pas"));
console.log(check("ssapdorw", "password"));
console.log(check("ssapdorw", "wrong"));
