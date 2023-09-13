let container = document.querySelector(".container");

function createGrid(rows, columns) {
    for (let i = 0; i < rows * columns; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grids")
        container.appendChild(grid);
    }
}


createGrid(16, 16)

