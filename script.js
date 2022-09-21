//make the initial grid
const initialGridSize = 16;
makeGrid(initialGridSize);
const boxDimensions = document.querySelector(".box-dimensions");
boxDimensions.textContent = `${initialGridSize} x ${initialGridSize}`;


// check if the mouse is down
let pointerDown = false;
document.body.addEventListener("pointerdown", () => pointerDown = true);
document.body.addEventListener("pointerup", () => pointerDown = false);

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

    // make a row of divs inside the grid container, each with a classname of grid-cell
    function makeGridRow(gridSize) {

        // make a grid row container
        const gridRowContainer = gridContainer.appendChild(document.createElement("div"));
        gridRowContainer.className = "grid-row";

        for (let i = 0; i < gridSize; i++) {
            // make a grid cell inside of gridRowContainer
            const gridCell = gridRowContainer.appendChild(document.createElement("div"));
            gridCell.className = "grid-cell";
            
            // initialize grid cell color
            gridCell.style.backgroundColor = "rgba(0, 0, 0, 0)";

            // add the appropriate event listener to the cell
            gridCell.addEventListener("pointerover", changeCell);
            gridCell.addEventListener("pointerdown", changeCell);
        }
    }

}

function changeCell(e) {
    if(e.type === 'pointerover' && !pointerDown) {
        return;
    }

    // adds 0.1 to the opacity value of the rgba background color
    let currentColor = e.target.style.backgroundColor;
    if (currentColor.slice(0, 4) === "rgba") {
        let beginningIndex = currentColor.lastIndexOf(",");
        let endingIndex = currentColor.lastIndexOf(")");
        let opacityString = currentColor.slice(beginningIndex + 2, endingIndex);

        let opacityNumber = parseFloat(opacityString);
        opacityNumber += 0.1;

        let newColor = currentColor.slice(0, currentColor.lastIndexOf(",") + 1) + " " + opacityNumber + ")";

        e.target.style.backgroundColor = newColor;
    }

}
