function isPalindrome(str) {
  //loop through from 0 to str.length/2 -1
  //use index to get char at both ends
  //if any two character are not equal return false
  //if everything goes well return true
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
