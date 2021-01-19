let container = document.querySelector(".container"),
    tile;
    tiles = [];

function makeTiles() {

    for (let i = 0; i < 2; i++) {

        tile = document.createElement("div");

        tile.classList.add("tile");
        tile.addEventListener("click", turnTail, false);

        tiles.push(tile);

        container.appendChild(tiles[i]);

    }

}
makeTiles();

function turnTail(e) {

    let target = e.target;

    target.style.backgroundColor = "green";

}

// console.log(tiles);
// console.log(tile);
