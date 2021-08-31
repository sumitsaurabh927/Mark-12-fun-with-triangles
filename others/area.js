var btn = document.querySelector("#button")
var inputs = document.querySelectorAll(".input")
var btn = document.querySelector("button")
var out = document.querySelector("#output")
btn.addEventListener("click", fun)

function fun() {
    var a = Number(inputs[0].value)
    var b = Number(inputs[1].value)
    var c = (a * b) / 2
    out.innerText = "The area is: " + c + " (sq cm)"

}