/**
 * @description 数值类型与引用类型的比较
 * @author hui
 * @date 2019年6月24日
 */

var a = {n:1}
var b = a;
a = a.x = {n:2}
// a.x = a = {n:2}

console.log(a)
console.log(a.x)
console.log(b)
console.log(b.x)

