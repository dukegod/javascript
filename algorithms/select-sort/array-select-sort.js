// 选择排序算法
// 时间复杂度O(n^2)
// 1, 先假设第一个元素为最小的，
// 2, 然后通过循环找出最小元素，
// 3, 然后同第一个元素交换，接着假设第二个元素，重复上述操作即可

const genArr = require('../generate-array');

console.log('select sort');
const oldArray = genArr(5);
console.log(oldArray);

function selectSort(params) {
  const array = params;
  const len = array.length;
  let minIndex;
  let tmp;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        tmp = array[minIndex];
        array[minIndex] = array[j];
        array[j] = tmp;
        minIndex = j;
      } else {
        minIndex = i;
      }
    }
  }
  return array;
}

const newArray = selectSort(oldArray);
console.log(newArray);

