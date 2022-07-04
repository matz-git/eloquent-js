let w = 14;
let h = 11;
let grid = document.getElementById("grid");
let cbs = new Array();

for (let i = 0; i < h; i++) {
    cbs[i] = [];
    for (let j = 0; j < w; j++) {
        let newCb = document.createElement("INPUT");
        newCb.setAttribute("type", "checkbox");
        cbs.push(newCb);
        grid.appendChild(newCb);
    }
    grid.appendChild(document.createElement("br"))
}

function gridFromCbs() {
    return cbs.map(box => box.checked);
}

function cbsFromGrid(grid) {
    grid.forEach((value, i) => cbs[i].checked = value);
}

function rnd() {
    let result = [];
    for (let i = 0; i < w * h; i++) {
        result.push(Math.random() < 0.3);
    }
    return result;
}

cbsFromGrid(rnd());


// This does a two-dimensional loop over the square around the given
// x,y position, counting all fields that have a cell but are not the
// center field.
function countNeighbors(grid, x, y) {
    let count = 0;
    for (let y1 = Math.max(0, y - 1); y1 <= Math.min(h - 1, y + 1); y1++) {
        for (let x1 = Math.max(0, x - 1); x1 <= Math.min(w - 1, x + 1); x1++) {
            if ((x1 != x || y1 != y) && grid[x1 + y1 * w]) {
                count++;
            }
        }
    }
    return count;
}

function nextGeneration(grid) {
    let newGrid = new Array(w * h);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let neighbors = countNeighbors(grid, x, y);
            let offset = x + y * w;
            if (neighbors < 2 || neighbors > 3) {
                newGrid[offset] = false;
            } else if (neighbors == 2) {
                newGrid[offset] = grid[offset];
            } else {
                newGrid[offset] = true;
            }
        }
    }
    return newGrid;
}


function turn() {
    cbsFromGrid(nextGeneration(gridFromCbs()));
}

document.querySelector("#next").addEventListener("click", turn);

let running = null;
document.querySelector("#run").addEventListener("click", () => {
    if (running) {
        clearInterval(running);
        running = null;
    } else {
        running = setInterval(turn, 400);
    }
});