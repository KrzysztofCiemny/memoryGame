let container = document.querySelector(".container"),
    startButton = document.querySelector("button"),
    button,
    card,
    cards = [],
    cardsImg = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/ahri.jpg')", "url('img/ashe.jpg')", "url('img/nida.jpg')", "url('img/riven.jpg')", "url('img/sol.jpg')", "url('img/yasuo.jpg')"],
    shuffleCardsImg = [],
    turnCardCalls = 0,
    firstCardImg,
    secondCardImg,
    target1,
    target2,
    trials = 0,
    cardsHit = 0,
    cardsHit1 = 0;

startButton.addEventListener("click", howMuchCards, false);

function howMuchCards() {

    let buttonCardsImg1 = cardsImg.slice(0, 2);
        buttonCardsImg2 = [...buttonCardsImg1];
        buttonCardsImg = buttonCardsImg1.concat(buttonCardsImg2);

    container.textContent = '';
    showCards(4);

}

function showCards(numberOf) {

    // shuffleCardsImg = cardsImg.sort(() => Math.random() - 0.5);

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
        index = cards.indexOf(target),
        trialsCounter = document.querySelector("#trial");

    turnCardCalls++;

    if (turnCardCalls == 1) {

        firstCardImg = target.style.backgroundImage = buttonCardsImg[index];
        target1 = target;

    } else if (turnCardCalls == 2) {

        secondCardImg = target.style.backgroundImage = buttonCardsImg[index];
        target2 = target;


        if (firstCardImg == secondCardImg) {

            setTimeout(function() {

                target1.classList.add("hit");
                target2.classList.add("hit");

                target1.removeEventListener("click", turnCard, false);
                target2.removeEventListener("click", turnCard, false);

                turnCardCalls = 0;

            }, 300);

            cardsHit++;
            cardsHit1++;

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

    if(cardsHit == 2 && 4 && 6) {

        container.innerHTML = '';
        cardsHit = 0;

        button = document.createElement("BUTTON");
        button.innerText = "Next lvl";

        button.addEventListener("click", function() {

            if(cardsHit1 == 2) {

                let buttonCardsImg1 = cardsImg.slice(0, 4);
                    buttonCardsImg2 = [...buttonCardsImg1];
                    buttonCardsImg = buttonCardsImg1.concat(buttonCardsImg2);

                showCards(8);

            } else if(cardsHit1 == 4) {

                let buttonCardsImg1 = cardsImg.slice(0, 6);
                    buttonCardsImg2 = [...buttonCardsImg1];
                    buttonCardsImg = buttonCardsImg1.concat(buttonCardsImg2);

                showCards(12);

            } else if(cardsHit1 == 6) {

                let buttonCardsImg1 = cardsImg.slice(0, 8);
                    buttonCardsImg2 = [...buttonCardsImg1];
                    buttonCardsImg = buttonCardsImg1.concat(buttonCardsImg2);

                showCards(16);

            }

        }, false);

        container.appendChild(button);

    }
    console.log(cardsHit);
    console.log(button);
}

