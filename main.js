let container = document.querySelector(".container"),
    startButton = document.querySelector("button"),
    text,
    button,
    cards = [],
    img = ["url('img/kata.png')", "url('img/lucian.png')", "url('img/ahri.jpg')", "url('img/ashe.jpg')", "url('img/nida.jpg')", "url('img/riven.jpg')", "url('img/sol.jpg')", "url('img/yasuo.jpg')"],
    turnCardCalls = 0,
    firstCardImg,
    secondCardImg,
    target1,
    target2,
    trials = 0,
    cardsHit = 0,
    cardsHit1 = 0,
    cardsHit2 = 0,
    cardsHit3 = 0;
    praises = ["Gratulacje!", "Udało Ci się!", "Super!", "Ekstra!", "Niesamowite!", "Jesteś genialny!", "Lecisz jak szalony!", "Oby tak dalej!"];


startButton.addEventListener("click", startingCards, false);

function startingCards() {

    let cardsImg1 = img.slice(0, 2);
        cardsImg2 = [...cardsImg1];
        cardsImg = cardsImg1.concat(cardsImg2);

    container.textContent = '';

    showCards(4);

}

function showCards(numberOf) {

    cardsImg.sort(() => Math.random() - 0.5);

    for (let i = 0; i < numberOf; i++) {

        let card = document.createElement("div");

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

        // target.classList.add("card-flipped");
        firstCardImg = target.style.backgroundImage = cardsImg[index];
        target1 = target;
        target1.removeEventListener("click", turnCard, false);

    } else if (turnCardCalls == 2) {

        // target.classList.add("card-flipped");
        secondCardImg = target.style.backgroundImage = cardsImg[index];
        target2 = target;
        target2.removeEventListener("click", turnCard, false);


        if (firstCardImg == secondCardImg) {

            setTimeout(function() {

                target1.classList.add("hit");
                target2.classList.add("hit");

                // target1.removeEventListener("click", turnCard, false);
                // target2.removeEventListener("click", turnCard, false);

                turnCardCalls = 0;

            }, 300);

            cardsHit++;
            cardsHit1++;
            cardsHit2++;
            cardsHit3++;

        } else {

            setTimeout(function() {

                target1.style.backgroundImage = null;
                target2.style.backgroundImage = null;

                target1.addEventListener("click", turnCard, false);
                target2.addEventListener("click", turnCard, false);

                turnCardCalls = 0;

            }, 1500);

        }

        trials++;
        // trialsCounter.innerHTML = "trials: " + trials;

    }

    nextLevel();

}

function nextLevel() {

    if(cardsHit == 2) {

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
            // cards.classList.remove("hit");

            let cardsImg1 = img.slice(0, 4);
                cardsImg2 = [...cardsImg1];
                cardsImg = cardsImg1.concat(cardsImg2);

            cards.splice(0, cards.length);

            showCards(8);

        }, false);

        container.appendChild(text);
        container.appendChild(button);

        trials = 0;

    } else if(cardsHit1 == 4) {

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
            // cards.classList.remove("hit");
            console.log(cards);

            let cardsImg1 = img.slice(0, 6);
                cardsImg2 = [...cardsImg1];
                cardsImg = cardsImg1.concat(cardsImg2);

            cards.splice(0, cards.length);

            showCards(12);

        }, false);

        container.appendChild(text);
        container.appendChild(button);

        trials = 0;

    } else if(cardsHit2 == 6) {

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
            // cards.classList.remove("hit");
            console.log(cards);

            let cardsImg1 = img.slice(0, img.length);
                cardsImg2 = [...cardsImg1];
                cardsImg = cardsImg1.concat(cardsImg2);

            cards.splice(0, cards.length);

            showCards(16);

        }, false);

        container.appendChild(text);
        container.appendChild(button);

        trials = 0;

    } else if(cardsHit3 == 8) {

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

    }

}
