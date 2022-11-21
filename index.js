const DOMselectors = {
  submit: document.querySelector("#form"),
  box: document.querySelector(".info-card"),
  input: document.querySelectorAll(".text-box"),
  remove: document.querySelector(".remove"),
};

console.log(
  DOMselectors.submit,
  DOMselectors.remove,
  DOMselectors.box,
  DOMselectors.input
);

function clear() {
  document.getElementById("form").reset();
}

function pop() {
  let per;
  let idss = `#${person.firstName}`;
  // select the target element
  let removal = document.getElementById("idss");
  // remove the last list item
  removal.parentElement.removeChild(removal);
  console.log("poop");
}

function info() {
  let input = DOMselectors.input; //array of results/values
  let person = {};
  console.log(input[0]);
  person.firstName = input[0].value;
  person.lastName = input[1].value;
  person.gender = input[2].value;
  person.music = input[3].value;
  person.color = input[4].value;
  person.picture = input[5].value;
  return person;
}
DOMselectors.submit.addEventListener("submit", function (abc) {
  abc.preventDefault();

  let person = info();
  clear();

  DOMselectors.box.insertAdjacentHTML(
    "afterbegin",

    `
    <div id="#${person.firstName}">
    <img class="info-img" src="${person.picture}"/>
    
    <H5 >First name: ${person.firstName}<br>Last name: ${person.lastName}<br>Gender: ${person.gender}<br>Favorite Music: ${person.music}<br>Favorite Color: ${person.color}</H5>
    
    <button class="remove">Remove</>
    </div>`
  );

  console.log(`poop ${person}`);
});

DOMselectors.remove.addEventListener("click", function () {
  pop();
});

function removal(event) {
  event.target.remove();
}

document.querySelectorAll("remove").forEach((button) => {
  button.addEventListener("click", removal);
});
