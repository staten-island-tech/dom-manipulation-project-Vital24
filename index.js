const DOMselectors = {
  submit: document.querySelector("#form"),
  button: document.querySelector(".btn"),
  box: document.querySelector(".info"),
  input: document.querySelectorAll(".input"),
};

const Info = {
  fname: "",
  lname: "",
  age: "",
  gender: "",
  grade: "",
};

console.log(DOMselectors.submit, DOMselectors.button);
DOMselectors.submit.addEventListener("submit", function (e) {
  e.defaultPrevented();
  let input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);

  console.log(input);
});
