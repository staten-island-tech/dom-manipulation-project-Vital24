const button = document.getElementById("btn");
const text = document.querySelector("#text");

console.log(text);

const Domsel = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.querySelector("#bbbox"),
  points: document.querySelectorAll(".point"),
};

console.log(Domsel.box);

function backandtext(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is now a big red box";
  text.style.fontSize = "40px";
}

// !== filters everything other than element mentioned

backandtext(Domsel.box, Domsel.text);
