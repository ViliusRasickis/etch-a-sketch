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
  max: "3",
  value: "2",
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
spanSliderGet.innerHTML = "Medium";

thicknessRange.oninput = function () {
  if(this.value === "1") {
    spanSliderGet.innerHTML = "Minimum";
  } else if (this.value === "2") {
    spanSliderGet.innerHTML = "Medium";
  } else {
    spanSliderGet.innerHTML = "Maximum";
  }
};

const container = document.getElementById("frameContainer");

const horizontalX = 100;
const verticalY = horizontalX;
const totalPx = horizontalX * verticalY;

for (x = 1; x <= horizontalX; x++) {
  for(y = 1; y <= verticalY; y++) {
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "gridbox");  
    newElement.setAttribute("id", x + "-" + y);
    container.appendChild(newElement);
  }
}

let selection = document.querySelectorAll(".gridbox");
for (i = 0; i < selection.length; i++) {
  selection[i].style.width = 100 / Math.sqrt(totalPx) + "%";
  selection[i].style.height = 100 / Math.sqrt(totalPx) + "%";
}

let targetElement;
for (x = 1; x <= horizontalX; x++) {
  for(y = 1; y <= verticalY; y++) {
    targetElement = document.getElementById(x + "-" + y);
    targetElement.addEventListener("mouseover", changeColor);
  }
}

function changeColor (event) {
  newElement = event.target.id;
  const xCoord = parseInt(newElement.split('-')[0]);
  const yCoord = parseInt(newElement.split('-')[1]);

  if(spanSliderGet.innerHTML === "Minimum") {
    document.getElementById(newElement).style.background = "#646464";
  }

  if (spanSliderGet.innerHTML === "Medium") {
    let xOneMore;
    let xOneLess;
    let yOneMore;
    let yOneLess
    if (xCoord === 12) {
      xOneMore = 12;
    } else {
      xOneMore = xCoord + 1;
    }

    if (xCoord === 1) {
      xOneLess = 1;
    } else {
      xOneLess = xCoord - 1;
    }

    if (yCoord === 12) {
      yOneMore = 12;
    } else {
      yOneMore = yCoord + 1;
    }

    if (yCoord === 1) {
      yOneLess = 1;
    } else {
      yOneLess = yCoord - 1;
    }
 
    topLeft = (xOneLess) + "-" + (yOneLess);
    document.getElementById(topLeft).style.background = "#646464"; 
    topTop = (xOneLess) + "-" + (yCoord);
    document.getElementById(topTop).style.background = "#646464";
    topRight = (xOneLess) + "-" + (yOneMore);
    document.getElementById(topRight).style.background = "#646464"; 
    midLeft = xCoord + "-" + (yOneLess);
    document.getElementById(midLeft).style.background = "#646464";
    midMid = xCoord + "-" + yCoord; 
    document.getElementById(midMid).style.background = "#646464";
    midRight = xCoord + "-" + (yOneMore); 
    document.getElementById(midRight).style.background = "#646464";
    bottomLeft = (xOneMore) + "-" + (yOneLess); 
    document.getElementById(bottomLeft).style.background = "#646464";
    bottomBottom = (xOneMore) + "-" + (yCoord); 
    document.getElementById(bottomBottom).style.background = "#646464";
    bottomRight = (xOneMore) + "-" + (yOneMore); 
    document.getElementById(bottomRight).style.background = "#646464";
  }

  if(spanSliderGet.innerHTML === "Maximum") {
    let xOneMore;
    let xTwoMore;
    let xOneLess;
    let xTwoLess;
    let yOneMore;
    let yTwoMore;
    let yOneLess;
    let yTwoLess;

    if (xCoord === horizontalX) {
      xOneMore = horizontalX;
    } else {
      xOneMore = xCoord + 1;
      xTwoMore = xCoord + 2;
    }

    if (xCoord === 1) {
      xOneLess = 1;
    } else {
      xOneLess = xCoord - 1;
      xTwoLess = xCoord - 2;
    }

    if (yCoord === verticalY) {
      yOneMore = verticalY;
    } else {
      yOneMore = yCoord + 1;
      yTwoMore = yCoord + 2;
    }

    if (yCoord === 1) {
      yOneLess = 1;
    } else {
      yOneLess = yCoord - 1;
      yTwoLess = yCoord - 2;
    }
 
    topLeft = xOneLess + "-" + yOneLess;
    document.getElementById(topLeft).style.background = "#646464"; 
    topTopLeftLeft = xTwoLess + "-" + yTwoLess;
    document.getElementById(topTopLeftLeft).style.background = "#646464"; 
    topTopLeft = xOneLess + "-" + yTwoLess;
    document.getElementById(topTopLeft).style.background = "#646464"; 

    topTop = xCoord + "-" + yOneLess;
    document.getElementById(topTop).style.background = "#646464";
    topTopTop = xCoord + "-" + yTwoLess;
    document.getElementById(topTopTop).style.background = "#646464";

    topRight = xOneLess + "-" + yOneMore;
    document.getElementById(topRight).style.background = "#646464";
    topTopRight = xOneMore + "-" + yTwoMore;
    document.getElementById(topTopRight).style.background = "#646464";
    topTopRightRight = xTwoMore + "-" + yTwoMore;
    document.getElementById(topTopRightRight).style.background = "#646464";
    
    midLeft = xCoord + "-" + yOneLess;
    document.getElementById(midLeft).style.background = "#646464";
    midLeftTop = xTwoLess + "-" + yOneLess;
    document.getElementById(midLeftTop).style.background = "#646464";
    midLeftLeft = xTwoLess + "-" + yCoord;
    document.getElementById(midLeftLeft).style.background = "#646464";
    midLeftBottom = xTwoLess + "-" + yOneMore;
    document.getElementById(midLeftBottom).style.background = "#646464";
    
    midMid = xCoord + "-" + yCoord; 
    document.getElementById(midMid).style.background = "#646464";
    
    midRight = xCoord + "-" + yOneMore; 
    document.getElementById(midRight).style.background = "#646464";
    midRightTop = xTwoMore + "-" + yOneLess;
    document.getElementById(midRightTop).style.background = "#646464";
    midRightRight = xTwoMore + "-" + yCoord;
    document.getElementById(midRightRight).style.background = "#646464";
    midRightBottom = xTwoMore + "-" + yOneMore;
    document.getElementById(midRightBottom).style.background = "#646464";
    
    bottomLeft = xOneMore + "-" + yOneLess; 
    document.getElementById(bottomLeft).style.background = "#646464";
    bottomBottomLeftLeft = xTwoLess+ "-" + yTwoMore; 
    document.getElementById(bottomBottomLeftLeft).style.background = "#646464";
    bottomBottomLeft= xOneLess+ "-" + yTwoMore; 
    document.getElementById(bottomBottomLeft).style.background = "#646464";
    bottomBottom = xOneMore + "-" + yCoord; 
    document.getElementById(bottomBottom).style.background = "#646464";
    bottomBottomBottom = xTwoMore + "-" + yCoord; 
    document.getElementById(bottomBottomBottom).style.background = "#646464";
    bottomRight = xOneMore + "-" + yOneMore; 
    document.getElementById(bottomRight).style.background = "#646464";
    bottomBottomRight = xOneMore + "-" + yTwoMore; 
    document.getElementById(bottomBottomRight).style.background = "#646464";
    bottomBottomRightRight = xTwoMore + "-" + yTwoMore; 
    document.getElementById(bottomBottomRightRight).style.background = "#646464"
  }
}