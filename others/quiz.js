var btn = document.querySelector("#btn")
var triangleForm = document.querySelector("#form")
// var formResults = new FormData(triangleForm)


const correctAns = ["100°", "equilateral"]
var out = document.querySelector("#output")


btn.addEventListener("click", btnPressed)




function btnPressed() {
    var i = 0;
    var score = 0;

    const formResult = new FormData(triangleForm)

    for (let data of formResult.values()) {

        out.innerText = ""
        // console.log("clicked");

        console.log(data);
        if (data === correctAns[i]) {
            // console.log("correct");
            score += 10
            // console.log(score);
        } else {
            // console.log("incorrect");
            score = score + 0;
            // console.log(score);
        }
        i += 1
    }
    out.innerText = "Final Score: " + score;

}