function removeDuplicates(arr) {
  //sort the array
  //use pointer to remove duplicates
  // create and return new array with all the duplicates removed
  const tempArray = arr.slice(); //new copy created because I don't want to destroy original copy

  //[1,2,1,2,3,-1] ==> [1,2,3,-1]
  // nd = 0, i =0 a[0] = a[0]
  // nd = 1, i = 1, a[1] = a[1]
  // nd = 2, i = 2,
  // nd = 2, i = 3,
  // nd = 2, i = 4, a[2] = a[4]
  // nd = 3, i = 5, a[3] = a[5]
  //nd = 4
  //(0,n-1)...(0,3)

  let nextNonDuplicate = 0;
  const setOfSeen = new Set();
  for (let i = 0; i < tempArray.length; i++) {
    if (!setOfSeen.has(tempArray[i])) {
      tempArray[nextNonDuplicate++] = tempArray[i];
      setOfSeen.add(tempArray[i]);
    }
  }

  console.log(tempArray);
  return tempArray.slice(0, nextNonDuplicate);
}

module.exports = removeDuplicates;
