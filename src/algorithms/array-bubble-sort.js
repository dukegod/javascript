// 冒泡排序算法
// 时间复杂度为:O(n²)
// 最慢的算法，也是最好实现的算法，
// 两两比较，交换位置

const genArr = require('./generate-array');

const array = genArr(5);
console.log(array);

function bubbleFunc(params) {
  const arr = params;
  const len = arr.length;
  for (let i = len; i > 1; i--) {
    for (let j = 0; j < len - 1; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const newArray = bubbleFunc(array);
console.log(newArray);

module.exports = bubbleFunc;
