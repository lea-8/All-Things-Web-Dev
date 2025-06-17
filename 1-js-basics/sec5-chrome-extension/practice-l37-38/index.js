const credits = {f: "foo"}

if (NaN) { 
    console.log("A")
} else {
    console.log("B")
}

/*
truthy:
- 12
- "hllo"
- [1, 2]
- true
falsey:
- 0
- ""
- null -> "how developer signalises emptiness"
- false -> "how JavaScript signalises emptiness"
- undefined
- NaN
*/

// let x = {f: "foo", b: "bar"}
let x = ["jo"]

console.log(x[2])


// --- L38 ---

let trueOrFalse = Boolean([])

console.log(trueOrFalse)