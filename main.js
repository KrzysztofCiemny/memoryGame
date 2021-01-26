let container = document.querySelector(".container"),
    tile,
    tiles = [],
    tilesImg = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/kata.png')", "url('img/lucian.png')"],
    turnTailCalls = 0,
    firstCardImg,
    secondCardImg,
    target1,
    tarCard

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

        firstCardImg = target.style.backgroundImage = tilesImg[index];
        target1 = target;

    } else if (turnTailCalls == 2) {

        secondCardImg = target.style.backgroundImage = tilesImg[index];
        target2 = target;

        if (firstCardImg == secondCardImg) {

            target1.classList.add("hit");
            target2.classList.add("hit");

            target1.removeEventListener("click", turnTail, false);
            target2.removeEventListener("click", turnTail, false);

            turnTailCalls = 0;

        } else {

            target1.style.backgroundImage = null;
            target2.style.backgroundImage = null;

            turnTailCalls = 0;

        }

    }
    console.log(turnTailCalls);
    // console.log(index);

}

