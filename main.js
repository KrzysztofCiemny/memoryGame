let container = document.querySelector(".container"),
    tile = document.createElement("div");

tile.classList.add("tile");
container.appendChild(tile);

function turnTail() {

    alert("eloo");

}

tile.addEventListener("click", turnTail, false);
