// 归并算法
// 时间复杂度为O(nlog₂n)
// 1，把 n 个记录看成 n 个长度为 l 的有序子表
// 2. 进行两两归并使记录关键字有序，得到 n/2 个长度为 2 的有序子表
// 3. 重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止。

const genArr = require('./generate-array');

console.log('merge sort');
const oldArray = genArr(5);
console.log(oldArray);

function merge(left, right) {
  const tmp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      tmp.push(left.shift());
    } else {
      tmp.push(right.shift());
    }
  }
  return tmp.concat(right, left);
}

function mergeSort(params) {
  const array = params;
  const len = array.length;
  if (len === 1) {
    return array;
  }
  const mid = Math.floor(len / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const newArray = mergeSort(oldArray);
console.log(newArray);
