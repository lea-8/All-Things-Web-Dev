// --- Lesson 2 ---
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
function printCourses(courses) {
    for (let i = 0; i < courses.length; i++) {
        console.log(courses[i])
    }
}

// Call the function while passing in myCourses as an argument
printCourses(myCourses)