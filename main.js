let container = document.querySelector(".container"),
    tile;
    tiles = [];

function makeTiles() {

    for(let i = 0; i < 2; i++) {

        tile = document.createElement("div");

        tile.classList.add("tile");

        tiles.push(tile);

        container.appendChild(tiles[i]);

    }
}
makeTiles();

// function turnTail() {

//     tile.style.backgroundColor = "green";

// }

// for(let i = 0; i < tiles.length; i++) {

//     tile.addEventListener("click", turnTail, false);

// }



console.log(tiles);
console.log(tile);
