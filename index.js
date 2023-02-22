const DOMselectors = {
  submit: document.querySelector("#form"),
  box: document.querySelector(".dog"),
  input: document.querySelectorAll(".text-box"),
};

function clear() {
  document.getElementById("form").reset();
}

function removal(event) {
  event.target.parentElement.remove();
}

function inject() {
  let person = info();
  DOMselectors.box.insertAdjacentHTML(
    "afterbegin",

    `
    <div class="info-card">
          
      <img class="info-img" src="${person.picture}"/>
    
      <H5 >First name: ${person.firstName}<br>Last name: ${person.lastName}<br>Gender: ${person.gender}<br>Favorite Music: ${person.music}<br>Favorite Color: ${person.color}</H5>
      <button class="remove">Remove Album</button>
  
    </div>`
  );
}
DOMselectors.submit.addEventListener("submit", function (abc) {
  abc.preventDefault();
  clear();
  inject();
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", removal);
  });
});
