const Fighter = require("./src/Fighter");

const heracles = new Fighter("Heracles 🧔 ", 20, 6);
const nemean = new Fighter("Nemean Lion 🦁 ", 11, 13);

while (nemean.life > 0 && heracles.life > 0) {
  console.log(heracles.fight(nemean));
  console.log(nemean.fight(heracles));
}

// console.log(heracles);
// console.log(nemean);
// console.log(nemean.fight(heracles));
