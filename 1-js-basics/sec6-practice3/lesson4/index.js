let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const scoreBtn = document.getElementById("score-btn")

// Use addEventListener() to listen for button clicks
scoreBtn.addEventListener("click", logJaneScore)

// Log Jane's score when the button is clicked (via data)
function logJaneScore() {
    console.log(data[0].score)
}
