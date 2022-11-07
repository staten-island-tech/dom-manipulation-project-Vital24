const Domsel = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.querySelector("#bbbox"),
  points: document.querySelectorAll(".point"), //node list
};

function backandtext(background, text) {
  background.style.backgroundColor = "purple";
  text.innerHTML = "this is now a big red box";
  text.style.fontSize = "40px";
  text.style.color = "white";
}

Domsel.button.addEventListener("click", function () {
  backandtext(Domsel.box, Domsel.text);
}); // takes two agruements, event and callback function

function changeLi() {
  Domsel.points.forEach((point) => {
    point.addEventListener(click, function () {
      point.textContent = "NA Pokemon";
    });
    console.log(point);
  });
}
changeLi();
