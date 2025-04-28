/* Javascript for a digital Etch and Sketch (Etch-a-Sketch) */

const body = document.querySelector("body");

// creates a node button in the DOM for resizing the grid.
const gridEntry = document.createElement("button");
gridEntry.classList.add("btn");
gridEntry.textContent = "How Big Would You Like Your Grid?";
body.appendChild(gridEntry);

// creates a node button in the DOM for clearing the grid.
const clear = document.createElement("button");
clear.classList.add("btn");
clear.textContent = "Clear the Grid";
body.appendChild(clear);


const gridSpace = document.querySelector("#gridSpace");

// initial values for the array that will be used to create the grid
let gridSize = 16;
let gridRow = [];
let gridPoint = [];


clear.addEventListener("click", () => {
  drawGrid(16);
});

drawGrid(gridSize)

gridEntry.addEventListener("click", () => {
  let c = prompt("That's not a valid size. Please enter a size between '2' and '100'.")
  let gridSizeTemp = parseInt(c);

  let x = 0;
  while (x == 0) {
    if (typeof(gridSizeTemp) == "number" && gridSizeTemp >= 2 && gridSizeTemp <= 100 && gridSizeTemp != null) {
      x++;
    } else if (c === null) {
      x++;
    } else {
      gridSizeTemp = parseInt(prompt("That's not a valid size. Please enter a size between '2' and '100'."))
    }
  }

  if (gridSizeTemp) {
    gridSize = gridSizeTemp;
    
    drawGrid(gridSize);
  }
})


function drawGrid(gridSize) {

  clearGrid();

  /* cycles through the grid array and creates a new array at 
  each index, then appends it to the grid in the DOM. */
  for (let i = gridSize; i > 0; i--) {
    gridRow[i] = document.createElement("div");
    gridRow[i].classList.add("gridRow", "grid")
    gridSpace.appendChild(gridRow[i]);

    /* within each of the above cycles, populates the current 
       grid row array with a series of variables, adds an
       event listener for hovering with the mouse, and appends
       it to the row in the DOM. */ 
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

