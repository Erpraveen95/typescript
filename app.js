"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResults = [];
const stringResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
    else {
        return +num1 + +num2;
    }
}
// defining bject type
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timeStamp);
}
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const addStrings = add(num1, num2);
    stringResult.push(addStrings);
    console.log(numResults);
    console.log(stringResult);
    printResult({ val: result, timeStamp: new Date() });
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It Works");
    }, 1000);
});
promise.then((res) => {
    console.log(res.split("W"));
});
