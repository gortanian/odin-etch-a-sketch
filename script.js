makeGrid(16);

// check if the mouse is down
let mouseDown = false; 
document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);


// add event listeners to all of the grid cells, running a function when they're hovered over
const gridCells = document.querySelectorAll(".grid-cell");
for (const gridCell of gridCells) {
    gridCell.addEventListener("mouseover", cellEventFunction);
    gridCell.addEventListener("mousedown", changeCell);
}


// create a gridSize by gridSize div grid inside the grid container
function makeGrid(gridSize) {

    for (let i = 0; i < gridSize; i++) {
        makeGridRow(gridSize);
    }
        
    // make a row of divs gridsize long inside the grid container, each with a classname of grid-cell
    function makeGridRow(gridSize) {

        // make a grid row container
        const gridContainer = document.querySelector(".grid-container");
        const gridRowContainer = gridContainer.appendChild(document.createElement("div"));
        gridRowContainer.className = "grid-row";

        for (let i = 0; i < gridSize; i++) {
            // make a grid cell inside of gridRowContainer
            const gridCell = gridRowContainer.appendChild(document.createElement("div"));
            gridCell.className = "grid-cell";

        }
    }
}

function cellEventFunction(e) {
    // when this function is called, I want to change the color of the gridCell it was called on. 
    console.log(e.target);
    if (mouseDown) {
        changeCell(e);
    }
}

function changeCell(e) {
    e.target.style.background = "black";
}