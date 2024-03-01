let firstNum = document.getElementById("firstNumber");
let secondNum = document.getElementById("secondNumber");
let thirdNum = document.getElementById("thirdNumber");
let result = document.querySelector("p")

function sum() {
    result.innerHTML = +firstNum.value + +secondNum.value + +thirdNum.value
}


function average() {
    let sumNum = +firstNum.value + +secondNum.value + +thirdNum.value;
    let averageNum = sumNum / 3;
    result.innerText = averageNum;
}

function min() {

    let minNumber = Math.min(+firstNum.value, +secondNum.value, +thirdNum.value)
    result.innerText = minNumber;
}


function max() {
    let maxNumber = Math.max(+firstNum.value, +secondNum.value, +thirdNum.value)
    result.innerText = maxNumber
}



// 2CI TAPSIRIQ

let firstWord = document.getElementById("firstWord");
let secondWord = document.getElementById("secondWord");
let thirdWord = document.getElementById("thirdWord");

function firstChange() {
    var firstChangedWord = firstWord.value;
    firstWord.value = secondWord.value;
    secondWord.value = firstChangedWord;
}

function secondChange() {
    var secondChangedWord=secondWord.value;
    secondWord.value=thirdWord.value;
    thirdWord.value=secondChangedWord;
}