// Your code goes here
const introImg = document.querySelector("img")

introImg.addEventListener('mouseenter', () => {
    introImg.style.transform = 'scale(1.2)'
})

introImg.addEventListener("mouseleave", function() {
    introImg.style.transform = "scale(1)"
})