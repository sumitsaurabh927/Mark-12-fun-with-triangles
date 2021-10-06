const input = document.querySelectorAll(".input")

const btn = document.querySelector("#button")
const out = document.querySelector("#output")

btn.addEventListener("click", isTriangle)

console.log("github works")
function isTriangle() {
    var angle1 = Number(input[0].value)
    var angle2 = Number(input[1].value)
    var angle3 = Number(input[2].value)

    if ((angle1 + angle2 + angle3) === 180) {
        // console.log("It's a triangle!")
        out.innerText = "It's a triangle!"
    } else {
        // console.log("Not a triangle")
        out.innerText = "Not a triangle"
    }
}