// Use .innerHTML to render a Buy! button inside the div container

const divContainerEl = document.getElementById("container")
divContainerEl.innerHTML += "<button onClick='buy()'>Buy!</button>"

function buy() {
    divContainerEl.innerHTML += "<p>Thank you for buying!</p>"
}