let container = document.querySelector(".container"),
    startButton = document.querySelector("button"),
    timer = document.querySelector("#timer"),
    time = 0,
    timeout,
    text,
    button,
    cards = [],
    // img = ["url('img/lol/kata.png')", "url('img/lol/lucian.png')", "url('img/lol/ahri.jpg')", "url('img/lol/ashe.jpg')", "url('img/lol/nida.jpg')", "url('img/lol/riven.jpg')", "url('img/lol/sol.jpg')", "url('img/lol/yasuo.jpg')"],
    img = ["url('img/miraculum/kot.png')", "url('img/miraculum/all.png')", "url('img/miraculum/lisek.png')", "url('img/miraculum/marinet.jpg')", "url('img/miraculum/plagg.jpg')", "url('img/miraculum/pszczola.png')", "url('img/miraculum/titsi.png')", "url('img/miraculum/wladca.png')"],
    containerForImages,
    turnCardCalls = 0,
    firstCardImg,
    secondCardImg,
    target1,
    target2,
    index1,
    index2,
    trials = 0,
    cardsHit = 0,
    cardsHit1 = 0,
    cardsHit2 = 0,
    cardsHit3 = 0,
    praises = ["Gratulacje!", "Udało Ci się!", "Super!", "Ekstra!", "Niesamowite!", "Jesteś genialny!", "Lecisz jak szalony!", "Oby tak dalej!"];

const
    FROM_FIRST_CARD = 0,
    TO_SECOND_CARD = 2,
    FIRST_LEVEL_CARDS = 4,
    SECOND_LEVEL_CARDS = 8,
    THIRD_LEVEL_CARDS = 12,
    FOURTH_LEVEL_CARDS = 16,
    FIRST_LEVEL_ITERATION = 1,
    SECOND_LEVEL_ITERATION = 3,
    THIRD_LEVEL_ITERATION = 5,
    FOURTH_LEVEL_ITERATION = 7;

startButton.addEventListener("click", startGame, false);

function startGame() {
    startingCards();
    showCards(FIRST_LEVEL_CARDS, FIRST_LEVEL_ITERATION);

    time = 16;
    timerStart();
}

function startingCards() {
    let twoFirstCards = img.slice(FROM_FIRST_CARD, TO_SECOND_CARD),
        copyOfTwoFirstCards = [...twoFirstCards];

    containerForImages = [].concat(twoFirstCards, copyOfTwoFirstCards);

    container.textContent = '';
}

function showCards(howManyCards, whichIteration) {

    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cardsContainer");

    containerForImages.sort(() => Math.random() - 0.5);

    for (let i = 0; i < howManyCards; i++) {
        let card = createCard();
        cards.push(card);
        cardsContainer.appendChild(card);
        container.appendChild(cardsContainer);

        let nowaLiczba = howManyCards; // musi byc takie jak bylo whichIteration
        if (i === nowaLiczba) {

            const goToNextLine = document.createElement("div");
            goToNextLine.style.clear = "both";

            cardsContainer.appendChild(goToNextLine);

        }
    }

}

function createCard() {
    let card = document.createElement("div"),
        front = document.createElement("div"),
        back = document.createElement("div");

    card.classList.add("card");
    front.classList.add("front");
    back.classList.add("back");

    card.addEventListener("click", turnCard, false);

    card.appendChild(front);
    card.appendChild(back);
    return card;
}

// function turnCard() {

//     turnCardCalls++
//     let target = this;

//     if (turnCardCalls == 1) {

//         firstCard(target);

//     } else if (turnCardCalls == 2) {

//         secondCard(target);

//     }
// }

// function firstCard(firstTarget) {

//     let index = cards.indexOf(firstTarget);
//     firstTarget.classList.add("flip");

//     firstCardImg = firstTarget.lastChild.style.backgroundImage = cardsImg[index];
//     firstTarget.removeEventListener("click", turnCard, false);

//     return firstTarget; // albo to?
// }

// function secondCard(secondTarget) {

//     for(i = 0; i < cards.length; i++) {

//         cards[i].removeEventListener("click", turnCard, false);

//     }

//     let index = cards.indexOf(secondTarget);
//     secondTarget.classList.add("flip");

//     secondCardImg = secondTarget.lastChild.style.backgroundImage = cardsImg[index];
//     secondTarget.removeEventListener("click", turnCard, false);

//     if (firstCardImg == secondCardImg) {

//         setTimeout(function() {

//             firstTarget.lastChild.classList.add("hit");
//             secondTarget.lastChild.classList.add("hit");

//             turnCardCalls = 0;

//         }, 300);

//         setTimeout(function() {

//             for(i = 0; i < cards.length; i++) {

//                 cards[i].addEventListener("click", turnCard, false);

//             }

//         }, 500);

//         cardsHit++;
//         cardsHit1++;
//         cardsHit2++;
//         cardsHit3++;

//     } else {

//         setTimeout(function() {

//             firstTarget.classList.remove("flip");
//             secondTarget.classList.remove("flip");

//             for(i = 0; i < cards.length; i++) {

//                 cards[i].addEventListener("click", turnCard, false);

//             }

//             turnCardCalls = 0;

//         }, 1500);

//     }

//     trials++;

// }

//     nextLevel();

// }

function turnCard() {

    turnCardCalls++;

    let index = cards.indexOf(this);

    this.classList.add("flip");

    if (turnCardCalls == 1) {

        target1 = this;
        firstCardImg = target1.lastChild.style.backgroundImage = containerForImages[index];

        target1.removeEventListener("click", turnCard, false);

    } else if (turnCardCalls == 2) {

        for (i = 0; i < cards.length; i++) {

            cards[i].removeEventListener("click", turnCard, false);

        }

        target2 = this;
        secondCardImg = target2.lastChild.style.backgroundImage = containerForImages[index];

        target2.removeEventListener("click", turnCard, false);

        if (firstCardImg === secondCardImg) {

            setTimeout(function () {

                target1.lastChild.classList.add("hit");
                target2.lastChild.classList.add("hit");

                turnCardCalls = 0;

            }, 300);

            setTimeout(function () {

                for (i = 0; i < cards.length; i++) {

                    cards[i].addEventListener("click", turnCard, false);

                }

                target1.removeEventListener("click", turnCard, false);
                target2.removeEventListener("click", turnCard, false);

            }, 500);

            cardsHit++;
            cardsHit1++;
            cardsHit2++;
            cardsHit3++;

        } else {

            setTimeout(function () {

                target1.classList.remove("flip");
                target2.classList.remove("flip");

                for (i = 0; i < cards.length; i++) {

                    cards[i].addEventListener("click", turnCard, false);

                }

                turnCardCalls = 0;

            }, 1500);

        }

        trials++;

    }

    nextLevel();

}

function nextLevel() {

    if (cardsHit == 2) {

        setTimeout(function () {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = -3;
            cardsHit1 = 0;
            cardsHit2 = 0;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            const ButtonAndTextContainer = document.createElement("div");
            ButtonAndTextContainer.classList.add("ButtonAndTextContainer");

            text = document.createElement("div");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";
            text.classList.add("praise");

            button = document.createElement("button");
            button.innerText = "Next lvl";

            button.addEventListener("click", function () {

                container.innerHTML = '';

                let cardsImg1 = img.slice(0, 4);
                cardsImg2 = [...cardsImg1];
                containerForImages = cardsImg1.concat(cardsImg2);

                cards.splice(0, cards.length);


                showCards(SECOND_LEVEL_CARDS, SECOND_LEVEL_ITERATION);

                time = 31;
                timerStart();

            }, false);

            ButtonAndTextContainer.appendChild(text);
            ButtonAndTextContainer.appendChild(button);
            container.appendChild(ButtonAndTextContainer);

            trials = 0;

        }, 600);

    } else if (cardsHit1 == 4) {

        setTimeout(function () {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = -5;
            cardsHit1 = -3;
            cardsHit2 = 0;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            const ButtonAndTextContainer = document.createElement("div");
            ButtonAndTextContainer.classList.add("ButtonAndTextContainer");

            text = document.createElement("div");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";
            text.classList.add("praise");

            button = document.createElement("button");
            button.innerText = "Next lvl";

            button.addEventListener("click", function () {

                container.innerHTML = '';

                let cardsImg1 = img.slice(0, 6);
                cardsImg2 = [...cardsImg1];
                containerForImages = cardsImg1.concat(cardsImg2);

                cards.splice(0, cards.length);


                showCards(THIRD_LEVEL_CARDS, THIRD_LEVEL_ITERATION);

                time = 46;
                timerStart();

            }, false);

            ButtonAndTextContainer.appendChild(text);
            ButtonAndTextContainer.appendChild(button);
            container.appendChild(ButtonAndTextContainer);

            trials = 0;

        }, 600);

    } else if (cardsHit2 == 6) {

        setTimeout(function () {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = -7;
            cardsHit1 = -5;
            cardsHit2 = -3;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            const ButtonAndTextContainer = document.createElement("div");
            ButtonAndTextContainer.classList.add("ButtonAndTextContainer");

            text = document.createElement("div");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";
            text.classList.add("praise");

            button = document.createElement("button");
            button.innerText = "Next lvl";

            button.addEventListener("click", function () {

                container.innerHTML = '';

                let cardsImg1 = img.slice(0, img.length);
                cardsImg2 = [...cardsImg1];
                containerForImages = cardsImg1.concat(cardsImg2);

                cards.splice(0, cards.length);


                showCards(FOURTH_LEVEL_CARDS, FOURTH_LEVEL_ITERATION);

                time = 61;
                timerStart();

            }, false);

            ButtonAndTextContainer.appendChild(text);
            ButtonAndTextContainer.appendChild(button);
            container.appendChild(ButtonAndTextContainer);

            trials = 0;

        }, 600);

    } else if (cardsHit3 == 8) {

        setTimeout(function () {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = 0;
            cardsHit1 = 0;
            cardsHit2 = 0;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            const ButtonAndTextContainer = document.createElement("div");
            ButtonAndTextContainer.classList.add("ButtonAndTextContainer");

            text = document.createElement("div");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";
            text.classList.add("praise");

            button = document.createElement("button");
            button.innerText = "once more?";

            button.addEventListener("click", function () {

                container.innerHTML = '';
                cards.splice(0, cards.length);

                startingCards();

            }, false);

            ButtonAndTextContainer.appendChild(text);
            ButtonAndTextContainer.appendChild(button);
            container.appendChild(ButtonAndTextContainer);

            trials = 0;

        }, 600);

    }

}

// function timerStart() {

//     if(time > 0) {

//         time--;
//         timer.innerHTML = "Time: " + time;
//         timeout = setTimeout(timerStart, 1000);

//     } else {

//         for (let i = 0; i < cards.length; i++){

//             cards[i].classList.add("hit");

//         }

//         setTimeout (function() {

//             container.innerHTML = '';

//             text = document.createElement("span");
//             text.innerText = "Koniec czasu! Spróbujesz jeszcze raz?";

//             button = document.createElement("button");
//             button.innerText = "Again!";

//             button.addEventListener("click", function() {

//                 container.innerHTML = '';
//                 cards.splice(0, cards.length);

//                 startingCards()

//             }, false);

//             container.appendChild(text);
//             container.appendChild(button);

//         }, 400);

//     }

// }