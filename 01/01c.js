function sum(num1, num2) {
  return num1 + num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
let func = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);
if (func === "sum") {
  console.log("Sum Is : ", sum(num1, num2));
} else if (func === "minus") {
  console.log("minus : ", minus(num1, num2));
} else {
  console.log("incorrect operation");
}
