let container = document.querySelector(".container"),
    startButton = document.querySelector("button"),
    timer = document.querySelector("#timer"),
    time = 0,
    timeout,
    text,
    button,
    cards = [],
    img = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/ahri.jpg')", "url('img/ashe.jpg')", "url('img/nida.jpg')", "url('img/riven.jpg')", "url('img/sol.jpg')", "url('img/yasuo.jpg')"],
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


startButton.addEventListener("click", startingCards, false);

function startingCards() {

    let cardsImg1 = img.slice(0, 2);
        cardsImg2 = [...cardsImg1];
        cardsImg = cardsImg1.concat(cardsImg2);

    container.textContent = '';

    showCards(4);

    time = 16;
    timerStart();

}

function showCards(numberOf) {
    // let cards = [];
    // cardsImg.sort(() => Math.random() - 0.5);

    for (let i = 0; i < numberOf; i++) {

        let card = document.createElement("div"),
            front = document.createElement("div"),
            back = document.createElement("div");

        card.classList.add("card");
        front.classList.add("front");
        back.classList.add("back");

        card.addEventListener("click", turnCard, false);

        card.appendChild(front);
        card.appendChild(back);

        cards.push(card);

        container.appendChild(cards[i]);
    }

    // return cards; // czemu to się nie zwraca?

}

function turnCard() {

    turnCardCalls++
    let target = this;

    if (turnCardCalls == 1) {

        firstCard(target);

    } else if (turnCardCalls == 2) {

        secondCard(target);

    }
}
function firstCard(firstTarget) {

    let index = cards.indexOf(firstTarget);
    firstTarget.classList.add("flip");

    let firstCardImg = firstTarget.lastChild.style.backgroundImage = cardsImg[index];
    firstTarget.removeEventListener("click", turnCard, false);

    return firstTarget; // albo to?

}

function secondCard(secondTarget) {

    for(i = 0; i < cards.length; i++) {

        cards[i].removeEventListener("click", turnCard, false);

    }

    let index = cards.indexOf(secondTarget);
    secondTarget.classList.add("flip");

    secondCardImg = secondTarget.lastChild.style.backgroundImage = cardsImg[index];
    secondTarget.removeEventListener("click", turnCard, false);

    if (firstCardImg == secondCardImg) {

        setTimeout(function() {

            firstTarget.lastChild.classList.add("hit");
            secondTarget.lastChild.classList.add("hit");

            turnCardCalls = 0;

        }, 300);

        setTimeout(function() {

            for(i = 0; i < cards.length; i++) {

                cards[i].addEventListener("click", turnCard, false);

            }

        }, 500);

        cardsHit++;
        cardsHit1++;
        cardsHit2++;
        cardsHit3++;

    } else {

        setTimeout(function() {

            firstTarget.classList.remove("flip");
            secondTarget.classList.remove("flip");

            for(i = 0; i < cards.length; i++) {

                cards[i].addEventListener("click", turnCard, false);

            }

            turnCardCalls = 0;

        }, 1500);

    }

    trials++;

}

//     nextLevel();

// }

// function turnCard() {

//     turnCardCalls++;

//     let index = cards.indexOf(this);

//     this.classList.add("flip");

//     if (turnCardCalls == 1) {

//         target1 = this;
//         firstCardImg = target1.lastChild.style.backgroundImage = cardsImg[index];

//         target1.removeEventListener("click", turnCard, false);

//     } else if (turnCardCalls == 2) {

//         for(i = 0; i < cards.length; i++) {

//             cards[i].removeEventListener("click", turnCard, false);

//         }

//         target2 = this;
//         secondCardImg = target2.lastChild.style.backgroundImage = cardsImg[index];

//         target2.removeEventListener("click", turnCard, false);

//         if (firstCardImg == secondCardImg) {

//             setTimeout(function() {

//                 target1.lastChild.classList.add("hit");
//                 target2.lastChild.classList.add("hit");

//                 turnCardCalls = 0;

//             }, 300);

//             setTimeout(function() {

//                 for(i = 0; i < cards.length; i++) {

//                     cards[i].addEventListener("click", turnCard, false);

//                 }

//             }, 500);

//             cardsHit++;
//             cardsHit1++;
//             cardsHit2++;
//             cardsHit3++;

//         } else {

//             setTimeout(function() {

//                 target1.classList.remove("flip");
//                 target2.classList.remove("flip");

//                 for(i = 0; i < cards.length; i++) {

//                     cards[i].addEventListener("click", turnCard, false);

//                 }

//                 turnCardCalls = 0;

//             }, 1500);

//         }

//         trials++;

//     }

//     nextLevel();

// }

function nextLevel() {

    if(cardsHit == 2) {

        setTimeout(function() {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = -3;
            cardsHit1 = 0;
            cardsHit2 = 0;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            text = document.createElement("span");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";

            button = document.createElement("button");
            button.innerText = "Next lvl";

            button.addEventListener("click", function() {

                container.innerHTML = '';

                let cardsImg1 = img.slice(0, 4);
                    cardsImg2 = [...cardsImg1];
                    cardsImg = cardsImg1.concat(cardsImg2);

                cards.splice(0, cards.length);

                showCards(8);

                time = 31;
                timerStart();

            }, false);

            container.appendChild(text);
            container.appendChild(button);

            trials = 0;

        }, 600);

    } else if(cardsHit1 == 4) {

        setTimeout(function() {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = -5;
            cardsHit1 = -3;
            cardsHit2 = 0;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            text = document.createElement("span");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";

            button = document.createElement("button");
            button.innerText = "Next lvl";

            button.addEventListener("click", function() {

                container.innerHTML = '';

                let cardsImg1 = img.slice(0, 6);
                    cardsImg2 = [...cardsImg1];
                    cardsImg = cardsImg1.concat(cardsImg2);

                cards.splice(0, cards.length);

                showCards(12);

                time = 46;
                timerStart();

            }, false);

            container.appendChild(text);
            container.appendChild(button);

            trials = 0;

        }, 600);

    } else if(cardsHit2 == 6) {

        setTimeout(function() {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = -7;
            cardsHit1 = -5;
            cardsHit2 = -3;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            text = document.createElement("span");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";

            button = document.createElement("button");
            button.innerText = "Next lvl";

            button.addEventListener("click", function() {

                container.innerHTML = '';

                let cardsImg1 = img.slice(0, img.length);
                    cardsImg2 = [...cardsImg1];
                    cardsImg = cardsImg1.concat(cardsImg2);

                cards.splice(0, cards.length);

                showCards(16);

                time = 61;
                timerStart();

            }, false);

            container.appendChild(text);
            container.appendChild(button);

            trials = 0;

        }, 600);

    } else if(cardsHit3 == 8) {

        setTimeout(function() {

            clearTimeout(timeout);

            container.innerHTML = '';
            cardsHit = 0;
            cardsHit1 = 0;
            cardsHit2 = 0;
            cardsHit3 = 0;

            praises.sort(() => Math.random() - 0.5);

            text = document.createElement("span");
            text.innerText = praises[1] + " Potrzebowałeś zaledwie " + trials + " prób!";

            button = document.createElement("button");
            button.innerText = "once more?";

            button.addEventListener("click", function() {

                container.innerHTML = '';
                cards.splice(0, cards.length);

                startingCards();

            }, false);

            container.appendChild(text);
            container.appendChild(button);

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