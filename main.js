let container = document.querySelector(".container"),
    tile,
    tiles = [],
    tilesImg = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/kata.png')", "url('img/lucian.png')" ],
    turnTailCalls = 0,
    firstClick,
    secondClick,
    target1,
    target2;

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

        firstClick = target.style.backgroundImage = tilesImg[index];
        target1 = target;

    } else if (turnTailCalls == 2) {

        secondClick = target.style.backgroundImage = tilesImg[index];
        target2 = target;

        if (firstClick == secondClick) {

            alert("skrrt");

        } else {

            target1.style.backgroundImage = null;
            target2.style.backgroundImage = null;

        }

    }
    console.log(turnTailCalls);
    // console.log(index);

}

