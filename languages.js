function greetUser(language) {
  switch (language) {
    case "ru":
      console.log(`${language} -> "Привет!"`);
      break;
    case "en":
      console.log(`${language} -> "Hello!"`);
      break;
    case "de":
      console.log(`${language} -> "Hallo!"`);
      break;
    default:
      console.log(`${language} -> "Your language is not supported!"`);
  }
}

greetUser("ru");
greetUser("en");
greetUser("de");
greetUser("cn");
