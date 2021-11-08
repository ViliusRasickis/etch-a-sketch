// fix containers size, so it doesnt move
// create a hover item so it changes color on hover
// create some sort of choice mechanism with YxY choices, so user can choose

const container = document.getElementById("framecontainer");
const amountPixels = 64;

for (i = 1; i <= amountPixels; i++) {
  let newElement = document.createElement("div");
  newElement.setAttribute("class", "gridbox");
  container.appendChild(newElement);
  newElement.innerHTML = i;
}

let selection = document.querySelectorAll(".gridbox");
for (i = 0; i <= selection.length; i++) {
  selection[i].style.width = 100 / Math.sqrt(amountPixels) + "%";
  selection[i].style.height = 100 / Math.sqrt(amountPixels) + "%";
}
