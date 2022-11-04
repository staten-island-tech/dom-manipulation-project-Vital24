const gens = document.querySelectorAll(".pokemon");
console.log(gens);

const genArray = Array.from(gens); //Makes it a Array
const gen1 = genArray.filter((array) => {
  //cant fitler a NodeList gotta make it a array
  if (array.classList[1] === "gen1") {
    return true;
  }
  return false;
});

const = gen2ar = Array.from(document.querySelectorAll('gen2')
console.log(gen1);
