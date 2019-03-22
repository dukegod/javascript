/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) -1;
  let flag = 1;

  if (x && x < 0) {
    flag = -1
  }

  x = Number( Math.abs(x).toString().split('').reverse().join(''))

  if (x * flag > max || x * flag < min) {
    return 0
  }
  return x * flag
};


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-0.0123));
console.log(reverse(123.99));
