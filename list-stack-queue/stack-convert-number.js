/**
 * 数值转换
 * @param {数值} num
 * @param {基数} base
 */

function convertNumber(num, base) {
  if (num <= 0) return false;
  if (base <= 0) return false;
  const s = [];
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);

  console.log(s);
  let result = '';
  while (s.length > 0) {
    result += s.pop();
  }
  return result;
}

const s = convertNumber(10, 2);
console.log(s);


module.exports = convertNumber;
