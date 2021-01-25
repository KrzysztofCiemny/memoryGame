let container = document.querySelector(".container"),
    tile,
    tiles = [],
    tilesImg = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/kata.png')", "url('img/lucian.png')" ],
    turnTailCalls = 0,
    firstClick,
    secondClick;

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

    turnTailCalls++;

    if (turnTailCalls == 1) {

        target.style.backgroundColor = "white";
        firstClick = target.style.backgroundImage = tilesImg[index];

    } else if (turnTailCalls == 2) {

        target.style.backgroundColor = "white";
        secondClick = target.style.backgroundImage = tilesImg[index];

        if (firstClick == secondClick) {

            alert("skrrt");

        } else {



        }

    }
    console.log(turnTailCalls);
    // console.log(index);

}

