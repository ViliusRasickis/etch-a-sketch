// fix containers size, so it doesnt move
// create a joice mechanicsm of line thickness

const flexContainer = document.createElement("div");
flexContainer.setAttribute("id", "flexContainer");
document.body.appendChild(flexContainer);

const frameContainer = document.createElement("div");
frameContainer.setAttribute("id", "frameContainer");
flexContainer.appendChild(frameContainer);

const thicknessContainer = document.createElement("div");
thicknessContainer.setAttribute("id", "thicknessContainer");
flexContainer.appendChild(thicknessContainer);

const thickness = document.createElement("input");
const updateAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};
updateAttributes(thickness, {
  type: "range",
  min: "1",
  max: "100",
  value: "50",
  id: "thicknessRange",
});
thicknessContainer.appendChild(thickness);

const valueSlider = document.createElement("p");
valueSlider.innerHTML = "Thickness: ";
thicknessContainer.appendChild(valueSlider);

const spanSlider = document.createElement("span");
spanSlider.setAttribute("id", "span");
valueSlider.appendChild(spanSlider);

const thicknessRange = document.getElementById("thicknessRange");
const spanSliderGet = document.getElementById("span");
spanSliderGet.innerHTML = thicknessRange.value;

thicknessRange.oninput = function () {
  spanSliderGet.innerHTML = this.value;
};

const amountPixels = 4096;
const container = document.getElementById("frameContainer");

for (i = 1; i <= amountPixels; i++) {
  let newElement = document.createElement("div");
  newElement.setAttribute("id", "gridbox" + i);
  newElement.setAttribute("class", "gridbox");
  container.appendChild(newElement);
}

let selection = document.querySelectorAll(".gridbox");
for (i = 0; i < selection.length; i++) {
  selection[i].style.width = 100 / Math.sqrt(amountPixels) + "%";
  selection[i].style.height = 100 / Math.sqrt(amountPixels) + "%";
}

let targetElement;
for (i = 1; i <= amountPixels; i++) {
  targetElement = document.getElementById("gridbox" + i);
  targetElement.addEventListener("mouseover", changeColor);
}

function changeColor(event) {
  newElement = event.target.id;
  document.getElementById(newElement).style.background = "#646464";
}

/* Another way to get the color on the div
let targetElement;
for (i = 1; i <= amountPixels; i++) {
  targetElement = document.getElementById("gridbox" + i);
  targetElement.setAttribute("onmouseover", "this.style.background = 'blue'");
}*/
