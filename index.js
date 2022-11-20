const DOMselectors = {
  submit: document.querySelector("#form"),
  box: document.querySelector(".info-card"),
  input: document.querySelectorAll(".text-box"),
  remove: document.querySelector(".remove"),
};

console.log(
  DOMselectors.submit,
  DOMselectors.button,
  DOMselectors.box,
  DOMselectors.input
);

function clear() {
  document.getElementById("form").reset();
}

function remove() {
  document.get;
}

function pop() {
  // select the target element
  const last = document.getElementById("dos");
  // remove the last list item
  last.parentElement.removeChild(last);
  const dog = document.getElementById("uno");
  // remove the last list item
  dog.parentElement.removeChild(dog);
  const cat = document.getElementById("tres");
  // remove the last list item
  cat.parentElement.removeChild(cat);
}

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
  let ids = 1;
  ids++;
  console.log(ids);
  clear();

  DOMselectors.box.insertAdjacentHTML(
    "beforeend",

    `

    <img id="tres" class="info-img" src="${person.picture}"/>
    
    <H5 id="dos">First name: ${person.firstName}<br>Last name: ${person.lastName}<br>Gender: ${person.gender}<br>Favorite Music: ${person.music}<br>Favorite Color: ${person.color}</H5>
    
    <button id="uno" class="remove">Remove</>`
  );
  console.log(person);
});

DOMselectors.remove.addEventListener("click", function () {
  pop();
});
