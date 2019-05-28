/**
 * for
 * 循环可以打断
 */

const arr = [2, 3, 4, 5];
const newarr = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3) {
    break;
  }
  newarr.push(arr[i]);
  console.log(arr[i]);
}

console.log(arr);
console.log(newarr);
