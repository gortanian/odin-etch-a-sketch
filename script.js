//make the initial grid
const initialGridSize = 16;
makeGrid(initialGridSize);
const boxDimensions = document.querySelector(".box-dimensions");
boxDimensions.textContent = `${initialGridSize} x ${initialGridSize}`;


// check if the mouse is down
let mouseDown = false;
document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

// check for the slider input change, remaking the grid if it changes
const slider = document.querySelector(".slider");

slider.addEventListener("input", function (e) { 
    makeGrid(e.target.value);
    boxDimensions.textContent = `${e.target.value} x ${e.target.value}`;
});

// create a (gridSize x gridSize) div grid 
function makeGrid(gridSize) {

    // make a grid container, and empty it
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        makeGridRow(gridSize);
    }

    // make a row of divs gridsize long inside the grid container, each with a classname of grid-cell
    function makeGridRow(gridSize) {

        // make a grid row container
        const gridRowContainer = gridContainer.appendChild(document.createElement("div"));
        gridRowContainer.className = "grid-row";

        for (let i = 0; i < gridSize; i++) {
            // make a grid cell inside of gridRowContainer
            const gridCell = gridRowContainer.appendChild(document.createElement("div"));
            gridCell.className = "grid-cell";
            
            // initialize grid cell color
            gridCell.style.backgroundColor = "white";

            // add the appropriate event listener to the cell
            gridCell.addEventListener("mouseover", cellEventFunction);
            gridCell.addEventListener("mousedown", changeCell);
        }
    }

}

function cellEventFunction(e) {
    // when this function is called, I want to change the color of the gridCell it was called on. 
    if (mouseDown) {
        changeCell(e);
    }
}

function changeCell(e) {
    let currentColor = e.target.style.backgroundColor;
    if (currentColor === "white") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.1)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.2)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.3)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.4)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.5)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.6)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.7)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.8)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
    }
    else if (currentColor === "rgba(0, 0, 0, 0.9)") {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 1)"
    }
    else {
        e.target.style.backgroundColor = "black";
    }
}
