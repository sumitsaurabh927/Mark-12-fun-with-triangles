var btn = document.querySelector("#btn")
var triangleForm = document.querySelector("#form")
var formResults = new FormData(triangleForm)
// console.log(formResults);
btn.addEventListener("click", btnPressed)


const correctAns=["100","equilateral"]


function btnPressed() {
    // console.log("working fine")

    var i=0;
    var score=0;

    for (data of formResults){
        console.log(data);
        var userAns=data[1];
        // if (userAns===correctAns[i]){
        //     console.log("correct");
        //     score+=10
        // }else{
        //     console.log("incorrect");
        // }
        // i+=1
    console.log(userAns);
    }
    console.log("your score is: "+score);

}