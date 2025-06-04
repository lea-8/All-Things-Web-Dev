// --- Ex 1 ---
// two JS vars
let firstName = "Neo"
let lastName = "Sol"

// Concat the vars
let fullName = firstName + " " + lastName

// log to console
console.log(fullName)


// --- Ex 2 ---
let greeting = "Hi there"

// function with greeting:
function greetMe(name) {
    console.log(greeting + ", " + name)
}

// try it out
greetMe(fullName)


// --- Ex 3 ---
let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

// get to 10 points
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)


// --- Ex 4 ---
// Try and predict what these things will print.
console.log("2" + 2)  // 22
console.log(11 + 7)  // 18
console.log(6 + "5")  // 65
console.log("My points: " + 5 + 9)  // My points 59
console.log(2 + 2)  // 4
console.log("11" + "14") // 1114
