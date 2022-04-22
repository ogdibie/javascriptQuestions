const removeDuplicates = require("./removeDuplicates");

//using jest test later on
function runTest() {
  const arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
  console.log(removeDuplicates(arr));
}

runTest();
