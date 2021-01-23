let container = document.querySelector(".container"),
    tile = false,
    tiles = [],
    tilesImg = ["url('img/kata.png')", "url('img/lucian.png')"];

for (let i = 0; i < 4; i++) {

    tile = document.createElement("div");

    tile.classList.add("tile");
    tile.addEventListener("click", turnTail, false);

    tiles.push(tile);

    container.appendChild(tiles[i]);

}

function turnTail(e) {

    let target = e.target,
        index = tiles.indexOf(target);

        target.style.backgroundColor = "white";
        target.style.backgroundImage = tilesImg[index];

    tile = true;

    console.log(index);

}

