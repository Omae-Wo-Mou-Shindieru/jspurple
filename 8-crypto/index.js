function crypto(pass) {
  const arrFromStr = [...pass];
  if (arrFromStr.length < 4) {
    return "Слишком короткий пароль";
  }
  const firstHalfReversed = arrFromStr
    .splice(0, arrFromStr.length / 2)
    .reverse();

  [arrFromStr[0], arrFromStr[arrFromStr.length - 1]] = [arrFromStr[arrFromStr.length - 1], arrFromStr[0]];

  return firstHalfReversed.concat(arrFromStr).join("");
}

function check(cryptoPass, pass) {
  return cryptoPass === crypto(pass);
}

console.log(crypto("password"));
console.log(crypto("pass"));
console.log(crypto("pas"));
console.log(check("ssapdorw", "password"));
console.log(check("ssapdorw", "wrong"));
