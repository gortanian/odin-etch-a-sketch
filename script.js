makeGrid(16);

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