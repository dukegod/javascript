// 插入排序
//
// 算法描述：
// 1. 从第一个元素开始，该元素可以认为已经被排序
// 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
// 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
// 4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置
// 5. 将新元素插入到该位置后
// 6. 重复步骤 2~5


function arrayInsert(arr) {
  let array = arr;
  let tmp;
  for (let i = 0, len = array.length; i < len; i++) {
    tmp = array[i];
    for (let j = i; j > 0; j--) {
      if (array[j] > tmp) {
        array[j + 1] = array[j]
      } else {
        array[j] = tmp;
        break;
      }
    }
  }
  return array;
}


const arr = [12, 4, 90, 89, 6];

console.log(arrayInsert(arr));
