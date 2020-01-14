// Your code goes here



// Catch the intro image
const introImg = document.querySelector("img")


// When hover over the border will appear
introImg.addEventListener("mouseenter", () => {
    introImg.setAttribute("style", "border: 2px dashed gray;")
})

// When not hover over the border will disappear
introImg.addEventListener("mouseleave", () => {
    introImg.setAttribute("style", "border: none;")
})

// When click the scale will change to 1.2
introImg.addEventListener("click", () => {
    introImg.style.transform = "scale(1.5)"
    introImg.style.transition = "transform 1s"
})

// When double click the scale will change back to default (1.0)
introImg.addEventListener("dblclick", () => {
    introImg.style.transform = "scale(1)"
})