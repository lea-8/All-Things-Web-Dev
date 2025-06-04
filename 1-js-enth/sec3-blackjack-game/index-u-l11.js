// let firstCard = (Math.floor(Math.random() * 9) + 2)
// let secondCard = (Math.floor(Math.random() * 9) + 2)
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
console.log(sum)
let hasBlackjack = false
let isAlive = true

let message = ""

// game logic
if (sum <= 20) {
    // console.log("Do you want to draw a new card?")
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    // console.log("Wohoo! You've got Blackjack!")
    hasBlackjack = true
    message = "Wohoo! You've got Blackjack!"
} else {
    // console.log("You've lost.")
    isAlive = false
    message = "You've lost."
}

// console.log("hasBlackjack: " + hasBlackjack)
// console.log("isAlive: " + isAlive)
console.log("message:", message)