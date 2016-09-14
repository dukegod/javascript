// 类似数组的对象转换为数组类型
// 例如document.getElementsByTagName or document.querySelectorAll 返回值。

var myObject = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length : 5
};
// es5
var sliced = Array.prototype.slice.call( myObject );
console.log(sliced);

// es6
const realArray = Array.from(myObject);
console.log(realArray);


var realArray3 = [...myObject];
console.log(realArray3);
