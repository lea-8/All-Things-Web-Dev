let myLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("new")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    // talk to Chrome API to get current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        // --- what 'tabs' var should look like.
        // const tabs = [
        //     {url: "https://github.com/lea-8"}
        // ]

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    // improving performance
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
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
    render(myLeads)
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

    render(myLeads)
})
