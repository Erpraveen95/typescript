const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;
const numResults: Array<number> = [];
const stringResult: string[] = [];

type numberOrString = number | string;
type result = { val: number; timeStamp: Date };

interface resultObj {
  val: number;
  timeStamp: Date;
}
function add(num1: numberOrString, num2: numberOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}
// defining bject type
function printResult(resultObj: resultObj) {
  console.log(resultObj.val, resultObj.timeStamp);
}

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const addStrings = add(num1, num2);
  stringResult.push(addStrings as string);
  console.log(numResults);
  console.log(stringResult);
  printResult({ val: result as number, timeStamp: new Date() });
});

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It Works");
  }, 1000);
});

promise.then((res) => {
  console.log(res.split("W"));
});
