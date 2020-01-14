// Your code goes here


// Catch the h1
const h1Style = document.querySelector("h1")


// When hover over, it will transform slowly to scale of 1.5
h1Style.addEventListener("mouseenter", () => {
    h1Style.style.transform = "scale(1.5)"
    h1Style.style.transition = "transform 0.5s"
})

// When not hover over, the border will disappear
h1Style.addEventListener("mouseleave", () => {
    h1Style.style.transform = "scale(1)"
})

// On click, it will change the background color to light blue.
h1Style.addEventListener("click", () => {
    h1Style.style.backgroundColor = "#add8e6"
})

// Catch the nav
const navStyle = document.querySelector("nav")

// On click, it will change the background color to light blue.
navStyle.addEventListener("click", (event) => {
    navStyle.style.backgroundColor = "#add8e6"
    event.stopPropagation()
})



// Catch the intro image
const introImg = document.querySelector("img")


// When hover over, the border will appear
introImg.addEventListener("mouseenter", () => {
    introImg.setAttribute("style", "border: 2px dashed gray;")
})

// When not hover over, the border will disappear
introImg.addEventListener("mouseleave", () => {
    introImg.setAttribute("style", "border: none;")
})

// When clicked, the scale will change to 1.2
introImg.addEventListener("click", () => {
    introImg.style.transform = "scale(1.5)"
    introImg.style.transition = "transform 1s"
})

// When double clicked, the scale will change back to default (1.0)
introImg.addEventListener("dblclick", () => {
    introImg.style.transform = "scale(1)"
})

// Catch h2