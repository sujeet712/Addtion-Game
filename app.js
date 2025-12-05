let firstEle = document.getElementById("firstNumber");
let secondEle = document.getElementById("secondNumber");
let resultEle = document.getElementById("gameResult");

function generateNumbers() {
    firstEle.textContent = Math.ceil(Math.random() * 100);
    secondEle.textContent = Math.ceil(Math.random() * 100);
}

generateNumbers();

function checkResult() {
    let userInputEle = document.getElementById("userInput");
    let value1 = parseInt(userInputEle.value);

    let f = parseInt(firstEle.textContent);
    let s = parseInt(secondEle.textContent);

    if (value1 === (f + s)) {
        resultEle.textContent = "Success 🎉";
        resultEle.style.color = "green";
    } else {
        resultEle.textContent = "Try Again ❌";
        resultEle.style.color = "red";
    }
}

function restartGame() {
    generateNumbers();
    resultEle.textContent = "";
    document.getElementById("userInput").value = "";
}

// WRONG CODE
// let firstRN = (Math.ceil(Math.random() * 100));
// // console.log(Math.random());
// console.log(firstRN);
// // let a = Math.ceil(Math.random()*100);
// // console.log(a);
// let secondRN = (Math.ceil(Math.random() * 100));
// console.log(secondRN);


// let firstNumber = document.getElementById("firstNumber");
// let secondNumber = document.getElementById("secondNumber");

// firstNumber.textContent = firstRN;
// secondNumber.textContent = secondRN;
// let sum;
// sum = firstRN + secondRN;
// let userInput = document.getElementById("userInput").value;
// let gameResult = document.getElementById("gameResult");
// // function restartButt(){

// // }
// function checkResult() {
//     if (userInput === sum) {
//         gameResult.textContent = "Congratulation! You got it right.";
//     }
// }
