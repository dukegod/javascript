
// 默认状态下的比较函数
function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}
// 原地交换函数，而非用临时数组
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

// 分治函数
function partition(array, left, right) {
  // 用index取中间值而非splice
  const pivot = array[Math.floor((right + left) / 2)];
  console.log(`pivot`, pivot);
  let i = left;
  let j = right;

  while (i <= j) {

    // 找到小于分区的索引值
    while (compare(array[i], pivot) === -1) {
      i++;
    }
    console.log('---', i);

    // 找到大于分区的索引值
    while (compare(array[j], pivot) === 1) {
      j--;
    }
    console.log('+++', j);

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  console.log(array);
  console.log(i);
  return i;
}
// 快排函数
function quick(array, left, right) {
  console.log(`array::::${array}`);
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}

function quickSort(array) {
  return quick(array, 0, array.length - 1);
}

export {
  quickSort
}

// const genArr = require('../generate-array');

// const oldArray = genArr(7);
// console.log(`oldArray::::${oldArray}`);
// console.log(quickSort(oldArray));
