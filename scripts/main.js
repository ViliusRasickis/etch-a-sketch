let container = document.getElementById('framecontainer');
const amountPixels = 256;


for(i = 1; i <= amountPixels; i++) {
  let newElement = document.createElement('div');
  newElement.textContent = i;
  container.appendChild(newElement);
}

