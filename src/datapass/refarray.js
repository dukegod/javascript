var arr1 = [1, 2, 3, 4];
console.log('arr1:' + arr1);

function test(arr, n) {
  console.log('innerarray: ' + arr);

  var arrinner = arr;

  for (var i = 0; i < arrinner.length; i++) {
    arrinner[i] += n;
    return arrinner
  }
  // return arrinner;
}


var arr2 = test(arr1, 5);

console.log('arr2:' + arr2);

console.log('arr11: ' + arr1);

// arr1: 1,2,3,4 开始执行，输出
// innerarray: 1,2,3,4
//  都指向一个内存，此时指向的内存数据变了，这就是js的按引用传递，也就是
// arr2:6,2,3,4
// arr11: 6,2,3,4
