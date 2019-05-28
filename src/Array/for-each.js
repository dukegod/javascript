/**
 * forEach 没有返回值
 * 循环不能打断
 */

const arr = [2, 3, 4, 5];
const newarr = []
arr.forEach((item, index) => {
  item = item + 10;
  newarr.push(item);
});

console.log(arr);
console.log(newarr);
