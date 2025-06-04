let featuredPosts = [
    "Check out my Netflix clone", 
    "Here's the code for my project", 
    "I've re-launched my portfolio"
]

let mySkills = ["Hard-working", "HTML", "Python", "Java", "Music"]
let myDesired = ["Listening", "calm", "sleep"]

console.log(featuredPosts.length)

let myDescription = ["Neo", "23", true]

mySkills.push("sayiing hi")
console.log(mySkills)


// --- L24 ---
let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

// messages = messages.slice(0, -1)
messages.pop()
console.log(messages)
