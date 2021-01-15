let container = document.querySelector(".container"),
    tile = document.createElement("div");

tile.classList.add("tile");
container.appendChild(tile);

function turnTail() {

    tile.style.backgroundColor = "green";

}

tile.addEventListener("click", turnTail, false);
