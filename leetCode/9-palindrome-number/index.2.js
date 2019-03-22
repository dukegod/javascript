/**
 * l逻辑就是
 * @param x
 * @returns {boolean}
 */

const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let origin = x;
  let palindrome = 0,
    digit = 0;
  while (origin !== 0) {
    // 获取余数
    digit = origin % 10;
    // 拼装参数
    palindrome = digit + palindrome * 10;
    // 
    origin = (origin - digit) / 10;
    console.log(digit, palindrome, origin);
    if (origin === 0) {
      break;
    }
  }
  return palindrome === x;
};

console.log(isPalindrome(101));
// console.log(isPalindrome(1012))
