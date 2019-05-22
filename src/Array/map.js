/*
*map
*/

let arr = [2, 3, 4, 5];

let newarr = arr.map((item) => {
  let it = item;
  it += 6;
  return it;
});

console.log(arr);
console.log(newarr);

//
// let filterArr = arr.filter((item) => {
//   console.log(item)
//   return item;
// });
//
// console.log(arr)
// console.log(filterArr);

