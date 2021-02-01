let container = document.querySelector(".container"),
    buttons = document.querySelectorAll("button"),
    card,
    cards = [],
    cardsImg = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/kata.png')", "url('img/lucian.png')"],
    turnCardCalls = 0,
    firstCardImg,
    secondCardImg,
    target1,
    target2,
    trials = 0;


for (let i = 0; i < 4; i++) {

    buttons[i].addEventListener("click", howMuchCards, false);

}

function howMuchCards(e) {

    let buttonsArr = Array.from(buttons),
        target = e.target,
        index = buttonsArr.indexOf(target);

    if(index == 0) {

        showCards(4);

    }else if(index == 1) {

        showCards(8);

    }else if(index == 2) {

        showCards(12);

    }else if(index == 3) {

        showCards(16);

    }

}


function showCards(numberOf) {

    for (let i = 0; i < numberOf; i++) {

        card = document.createElement("div");

        card.classList.add("card");
        card.addEventListener("click", turnCard, false);

        cards.push(card);

        container.appendChild(cards[i]);

    }

}

function turnCard(e) {

    let target = e.target,
        index = tiles.indexOf(target),
        trialsCounter = document.querySelector("#trial");

    turnCardCalls++;

    if (turnCardCalls == 1) {

        firstCardImg = target.style.backgroundImage = cardsImg[index];
        target1 = target;

    } else if (turnCardCalls == 2) {

        secondCardImg = target.style.backgroundImage = cardsImg[index];
        target2 = target;


        if (firstCardImg == secondCardImg) {

            setTimeout(function() {

                target1.classList.add("hit");
                target2.classList.add("hit");

                target1.removeEventListener("click", turnCard, false);
                target2.removeEventListener("click", turnCard, false);

                turnCardCalls = 0;

            }, 300);

        } else {

            setTimeout(function() {

                target1.style.backgroundImage = null;
                target2.style.backgroundImage = null;

                turnCardCalls = 0;

            }, 1500);

        }

        trials++;
        trialsCounter.innerHTML = "trials: " + trials;

    }

}

