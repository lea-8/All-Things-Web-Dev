// --- Ex 1 ---
let person = {
    name: "Neo",
    age: 25,
    country: "UK"
}

function logData() {
    let intro = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(intro)
}

logData()

// --- Ex 2 ---
// skip, because conditionals only

// --- Ex 3 ---
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

// --- Ex 4 ---
largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")

console.log(largeCountries)

// --- Ex 5 ---
// skip because it's basic logic operators that look like Java.

// --- Ex 6 ---
let hands = ["rock", "paper", "scissor"]

function getRandomElement() {
    let randomIndex = Math.floor(Math.random() * 3)
    // console.log(randomIndex)
    return hands[randomIndex]
}

console.log(getRandomElement())