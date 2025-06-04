// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorString = "Something went wrong, please try again"
const elem = document.getElementById("error")

function errorFunction() {
    console.log("purchase button clicked")
    elem.textContent = errorString
}