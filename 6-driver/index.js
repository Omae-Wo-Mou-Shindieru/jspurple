const hasLicense = true;
const age = 18;
const isDrunk = false;

console.log(
  `Могу сесть за руль?\n${hasLicense && age >= 18 && !isDrunk ? "Да" : "Нет"}`
);
