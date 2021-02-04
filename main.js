let container = document.querySelector(".container"),
    button = document.querySelector("button"),
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
    cardsHit = 0;

button.addEventListener("click", howMuchCards, false);

function howMuchCards() {

    let startCardsImg1 = cardsImg.slice(0, 2);
        startCardsImg2 = [...startCardsImg1];
        startCardsImg = startCardsImg1.concat(startCardsImg2);

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

        firstCardImg = target.style.backgroundImage = startCardsImg[index];
        target1 = target;

    } else if (turnCardCalls == 2) {

        secondCardImg = target.style.backgroundImage = startCardsImg[index];
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

