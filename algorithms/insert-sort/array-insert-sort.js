// 插入排序
// 时间复杂度O(n^2)
// 算法描述：(升序排列)
// 1. 从第一个元素开始，该元素可以认为已经被排序
// 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
// 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
// 4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置
// 5. 将新元素插入到该位置后
// 6. 重复步骤 2~5

const genArr = require('../generate-array');

const oldArray = genArr(5);
console.log(oldArray);

function arrayInsert(arr) {
  const array = arr;
  const len = array.length;
  let tmp;
  for (let i = 0; i < len; i++) {
    tmp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > tmp) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = tmp;
  }
  return array;
}

const newArray = arrayInsert(oldArray);
console.log(newArray);
