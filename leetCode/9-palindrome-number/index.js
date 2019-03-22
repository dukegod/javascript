/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const current = x;
  let changeCurrent;

  if (x === 0 ) {
    return true
  }

  if (x < 0) {
    return false
  }

  changeCurrent = x.toString().split('').reverse().join('');
  // console.log(current);
  // console.log(changeCurrent);
  if (Number(current) === Number(changeCurrent)) {
    return true
  }
  return false
};


// test
// console.log(isPalindrome(0))
console.log(isPalindrome(101))
console.log(isPalindrome(1012))

