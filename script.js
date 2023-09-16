let container = document.querySelector(".container");

function createGrid(rows, columns) {
		let itemWidth = 100 / columns;
    let itemHeight = 100 / rows;
    
    container.innerHTML =""
    
    for (let i = 0; i < rows * columns; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grids");
        grid.style.width = `${itemWidth}%`
        grid.style.height = `${itemHeight}%`
        grid.addEventListener("mouseover", () => {grid.style.background = createRandomColor()})
        container.appendChild(grid);
    }}



let input = document.querySelector("#input")
let value = document.querySelector("#value")
value.textContent = `${input.value}x${input.value}`
input.addEventListener("input", (event) => {
	value.textContent = `${event.target.value}x${event.target.value}`;

});


function clear () {
	createGrid(input.value, input.value)
}

function createRandomColor () {
	let colors = ["#ED6A5A", "#A3F7B5", "#40C9A2", "#904C77"]
  return colors[Math.floor(Math.random() * colors.length)]
}

let clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", () => clear())

let createGridButton = document.querySelector("#grid-button")
createGridButton.addEventListener("click", () => createGrid(input.value, input.value))

createGrid(16, 16)



