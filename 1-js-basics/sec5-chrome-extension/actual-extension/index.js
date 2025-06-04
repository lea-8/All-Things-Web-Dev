let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("list-el")

inputBtn.addEventListener("click", function() {
    // console.log("Button clicked (via addEventListener)")
    // console.log(inputEl.value)
    myLeads.push(inputEl.value)
    console.log("myLeads: ", myLeads)

    // clear the input field
    inputEl.value = ""

    renderLeads()
})

function renderLeads() {
    // improving performance
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>
        `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}