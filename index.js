const Domsel = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  points: document.querySelectorAll("#input"),
};

Domsel.box.insertAdjacentElement("beforebegin", `<p>We are H1</p>`);
