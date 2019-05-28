/*
* map
* 返回一个新的数组
*/

let arr = [2, 3, 4, 5];

let newarr = arr.map((item) => {
  item += 6;
  if (item > 9) {
    return 9;
  }
  return item;
});

console.log(arr);
console.log(newarr);
