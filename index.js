const DOMselectors = {
  submit: document.querySelector("#form"),
  box: document.querySelector(".info-card"),
  input: document.querySelectorAll(".text-box"),
};

// const Info = {
//   fname: "",
//   lname: "",
//   age: "",
//   gender: "",
//   grade: "",
// };

console.log(
  DOMselectors.submit,
  DOMselectors.button,
  DOMselectors.box,
  DOMselectors.input
);
DOMselectors.submit.addEventListener("submit", function (abc) {
  abc.preventDefault();

  let input = DOMselectors.input; //array of results/values
  let person = {};
  console.log(input[0]);
  person.firstName = input[0].value;
  person.lastName = input[1].value;
  person.gender = input[2].value;
  console.log(person);

  DOMselectors.box.insertAdjacentHTML(
    "beforeend",
    `<H6>First name: ${person.firstName} \nLast name: ${person.lastName}</H6>`
  );
});
