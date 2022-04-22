const factorial = require("./factorial");

//using jest test later on
function runTest() {
  const num1 = 5;
  const num2 = 3;
  const num3 = 0;
  const num4 = 6;
  console.log(factorial(num1));
  console.log(factorial(num2));
  console.log(factorial(num3));
  console.log(factorial(num4));
}

runTest();
