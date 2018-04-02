/**
 * forEach 没有返回值
 */

const arr = [2, 3, 4, 5];

const newarr = arr.forEach((item, index, array) => {
  // console.log(item)
  array[index] += 10;
});

console.log(arr);
console.log(newarr);


let everyarr = arr.every((item, index, array) => {
  array[index] += 90;
});

console.log(arr);
console.log(everyarr);
