const body = document.querySelector("body");

const gridEntry = document.createElement("button");
gridEntry.classList.add("btn");
gridEntry.textContent = "How Big Would You Like Your Grid?";
body.appendChild(gridEntry);

const clear = document.createElement("button");
clear.classList.add("btn");
clear.textContent = "Clear the Grid";
body.appendChild(clear);

const gridSpace = document.querySelector("#gridSpace");

let gridSize = 16;
let gridRow = [];
let gridPoint = [];


clear.addEventListener("click", () => {
  drawGrid(16);
});

drawGrid(gridSize)

gridEntry.addEventListener("click", () => {
  let gridSizeTemp = parseInt(prompt("That's not a valid size. Please enter a size between '2' and '100'."))

  let x = 0;
  while (x == 0) {
    if (typeof(gridSizeTemp) == "number" && gridSizeTemp >= 2 && gridSizeTemp <= 100 && gridSizeTemp != null) {
      x++;
    } else {
      gridSizeTemp = parseInt(prompt("That's not a valid size. Please enter a size between '2' and '100'."))
    }
  }

  gridSize = gridSizeTemp;

  drawGrid(gridSize);

})

function drawGrid(gridSize) {

  clearGrid();

  for (let i = gridSize; i > 0; i--) {
    gridRow[i] = document.createElement("div");
    gridRow[i].classList.add("gridRow", "grid")
    gridSpace.appendChild(gridRow[i]);

    const gridPoint = [];
    for (let g = gridSize; g > 0; g--) {
      gridPoint[g] = document.createElement("div");
      gridPoint[g].classList.add("gridPoint");
      colorChanger(gridPoint[g]);
      gridRow[i].appendChild(gridPoint[g]);
    }
  }
}

function colorChanger(point) {
  point.addEventListener("mouseover", () => {
    point.classList.add("changeColor");
  })
}

function clearGrid(reset) {
  gridRow.forEach((grid) => {
    grid.remove();
  });
}

