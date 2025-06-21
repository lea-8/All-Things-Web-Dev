// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerEl = document.getElementById("container")

function render(images) {
    let imagesDOM = ""  // for performance reasons!
    for (let i = 0; i < images.length; i++) {
        imagesDOM += `<img alt="Company employees" class="team-img" src="${images[i]}">`
    }

    containerEl.innerHTML = imagesDOM
}

render(imgs)