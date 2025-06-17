let myLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("new")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

function renderLeads(leads) {
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

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    // console.log("Button clicked (via addEventListener)")
    // console.log(inputEl.value)
    myLeads.push(inputEl.value)
    console.log("myLeads: ", myLeads)

    // clear the input field
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log( JSON.stringify(myLeads) )

    renderLeads()
})
