const DOMselectors = {
  submit: document.querySelector("#form"),
  box: document.querySelector(".info-card"),
  input: document.querySelectorAll(".text-box"),
};

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
  person.music = input[3].value;
  person.color = input[4].value;
  person.picture = input[5].value;

  DOMselectors.box.insertAdjacentHTML(
    "beforeend",

    `<img class="info-img" src="${person.picture}"/>
            <H5>First name: ${person.firstName}<br>Last name: ${person.lastName}<br>Gender: ${person.gender}<br>Favorite Music: ${person.music}<br>Favorite Color: ${person.color}</H5>`
  );
});
