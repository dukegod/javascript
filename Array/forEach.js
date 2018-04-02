
let arr = [1, 2, 3, 4]

arr.forEach(function (item, index, array) {
  array[index]= array[index]+6;
});

console.log(arr);