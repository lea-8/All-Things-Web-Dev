// Cmd + D

let player = {
    name: "Polly",
    chips: 120
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(playerEl)

function getRandomCard() {
    // Math.random() generates a random number on [0, 1)
    randomNumber = Math.floor(Math.random() * 12) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 11 && randomNumber <= 13) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    
    drawCard1 = getRandomCard()
    drawCard2 = getRandomCard()
    cards = [drawCard1, drawCard2]
    sum = drawCard1 + drawCard2

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = ("Sum: " + sum)
    // render out all the cards player has
    // cardsEl.textContent = ("Cards: " + cards[0] + " " + cards[1])
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck.")
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        console.log(cards)
        renderGame()
    }
}