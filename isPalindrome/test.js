const isPalindrome = require("./isPalindrome");

//using jest test later on
function runTest() {
  const input = "madam";
  const input2 = "weather";
  const input3 = "12321";
  console.log(isPalindrome(input));
  console.log(isPalindrome(input2));
  console.log(isPalindrome(input3));
}

runTest();
