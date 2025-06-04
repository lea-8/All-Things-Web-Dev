// --- Ex 1 ---
let age = 100

if (age <= 20) {
    console.log("You can't enter.")
} else {
    console.log("Welcome")
}


// --- Ex 2 ---
if (age < 100) {
    console.log("Not eligible.")
} else if (age === 100) {
// this == and === business is weird.
// } else if (age === "100") {
    console.log("Here is your birthday card from the King.")
} else {
    console.log("Not eligible, you've already received a card.")
}