// Part 2 is text functionality

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    // let cards = Array.from(document.getElementsByClassName('class'));
    // let game = new FlipingFarm(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
}

// class FlipingFarm {
//     constructor(totalTime, cards) {
//         this.cardsArray = cards;
//         this.totalTime = totalTime;
//         this.timeRemaning = totalTime;
//         this.timer = document.getElementById('time-remaining');
//         this.ticker = document.getElementById('flips');
//     }
//     startGame() {
//         this.cardToCheck = null;
//         this.totalClicks = 0;
//         this.timeRemaning = this.totalTime;
//         this.matchedCards = [];
//         this.busy = true;
//     }
//     flipCard(card) {

//     }
//     cantFlipCard(card) {
//         return true;
//         // return (!this.busy && !this.matchedCards.includes(card) && card !=this.cardToCheck)
//     }
// }


// Part 2 is cards functionality

const allCards = document.querySelectorAll(".cards")

let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    // this.classList.toggle("flip");
    this.classList.add("flip");

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        firstCard = this;
        return;
    }
    // cardIsFlipped = false;
    secondCard = this;

    checkForMatch();
}


function checkForMatch() {
    let isMatched = firstCard.dataset.name === secondCard.dataset.name;
    isMatched ? disableCards() : unFlipCards();
    // if (firstCard.dataset.name === secondCard.dataset.name) { 
    //     disableCards();
    // } else {
    //     unFlipCards();
    // }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
        // lockBoard = false;
    }, 800);
}

function resetBoard() {
    [cardIsFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    allCards.forEach(function (card) {
        let randomPositions = Math.floor(Math.random() * 16);
        card.style.order = randomPositions;
    });
})();

allCards.forEach(function (card) {
    card.addEventListener("click", flipCard);
});


