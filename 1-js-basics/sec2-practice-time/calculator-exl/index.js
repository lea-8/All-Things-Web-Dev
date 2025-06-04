let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let result = 0
const sumElem = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
function add() {
    console.log("clicked: add")
    result = num1 + num2
    sumElem.textContent = "Result: " + result
}
function subtract() {
    console.log("clicked: subtract")
    result = num1 - num2
    sumElem.textContent = "Result: " + result
}
function divide() {
    console.log("clicked: divide")
    result = num1 / num2
    sumElem.textContent = "Result: " + result
}
function multiply() {
    console.log("clicked: multiply")
    result = num1 * num2
    sumElem.textContent = "Result: " + result
}


// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

