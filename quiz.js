var btn = document.querySelector("#btn")
var triangleForm = document.querySelector("#form")
var formResults = new FormData(triangleForm)
btn.addEventListener("click", btnPressed)
const correctAns = ["100", "equilateral"]

function btnPressed() {
    var i = 0;
    var score = 0;

    for (let data of formResults.values()) {
        console.log(data);
        var userAns = data ;
        if (userAns === correctAns[i]) {
            console.log("correct");
            score += 10
        } else {
            console.log("incorrect");
        }
        i += 1
    }
    console.log("your score is: " + score);
}