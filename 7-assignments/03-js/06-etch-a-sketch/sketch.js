console.log("Hi");

let enclosure = document.createElement("div");
enclosure.classList.add("enclosure");

const body = document.querySelector("body");
body.appendChild(enclosure);

let divs = [];
for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  divs.push(div);
  div.classList.add("cell");
  div.addEventListener("mouseover", changeColor);
  enclosure.appendChild(div);
}

function changeColor() {
  // console.log(this);
  this.classList.add("hovered");
}
























