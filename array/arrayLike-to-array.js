// 类似数组的对象转换为数组类型
// 例如document.getElementsByTagName or document.querySelectorAll 返回值。

const myObject = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  length: 5,
};
// es5
const sliced = Array.prototype.slice.call(myObject);
console.log(sliced);

// es6
const realArray = Array.from(myObject);
console.log(realArray);


const realArray3 = [...myObject];
console.log(realArray3);
