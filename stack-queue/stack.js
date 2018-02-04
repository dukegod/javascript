/**
 * Created by hui on 02/02/2018.
 */

class Stack {
  constructor() {
    this.stackArr = []
    this.top = 0
  }

  length() {
    return this.top
  }

  push(ele) {
    this.stackArr[this.top++] = ele
  }

  pop() {
    return this.stackArr[--this.top]
  }

  clear() {
    this.top = 0
  }
}


let s = new Stack()

s.push(1)
s.push(2)
s.push(3)

console.log(s.length())
console.log(s.pop())
s.clear()
console.log(s.length())

function Person(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

var num = 10;
var bol = true;
var str = "abc";
var obj = new Object();
var arr = ['a', 'b', 'c'];
var person = new Person(100, "笨蛋的座右铭", 25);