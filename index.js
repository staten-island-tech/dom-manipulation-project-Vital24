const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.querySelector(".container-box"),
  input: document.querySelectorAll("#input"),
};

const Info = {
  fname: "",
  lname: "",
  age: "",
  gender: "",
  race: "",
};

DOMselectors.button.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMselectors.input.value = "";

  console.log(input);
});
