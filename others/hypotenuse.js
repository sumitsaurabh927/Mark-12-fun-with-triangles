var btn = document.querySelector("#btn")
var inputs = document.querySelectorAll(".input")
var out = document.querySelector(".output")
btn.addEventListener("click", calculate)

function calculate() {
    var a = Number(inputs[0].value);
    var b = Number(inputs[1].value);
    var c = Math.sqrt(a * a + b * b)
    out.innerText = "Hypotenus is: " + c;
}