/**
 * 修饰类, 
 * 也就是把整个函数类作为参数传进去
 */

// 添加静态类的方法
function readonly(target, name, descriptor) {
  target.staticpp = true;
  return target
}

@readonly
class Person {

}

console.log(Person.staticpp)  // true

// 以上代码一本等同于
// Person = readonly(function Cat(){})
// 也就是把整个函数类作为参数传进去