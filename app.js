let firstRN = (Math.ceil(Math.random() * 100));
// console.log(Math.random());
console.log(firstRN);
// let a = Math.ceil(Math.random()*100);
// console.log(a);
let secondRN = (Math.ceil(Math.random() * 100));
console.log(secondRN);


let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

firstNumber.textContent = firstRN;
secondNumber.textContent = secondRN;
let sum;
sum = firstRN + secondRN;
let userInput = document.getElementById("userInput").value;
let gameResult = document.getElementById("gameResult");
// function restartButt(){

// }
function checkResult() {
    if (userInput === sum) {
        gameResult.textContent = "Congratulation! You got it right.";
    }
}
