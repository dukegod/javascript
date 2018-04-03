/**
 * Created by hui on 02/02/2018.
 */

class Stack {
  constructor() {
    this.stackArr = [];
    this.top = 0;
  }
  length() {
    return this.top;
  }
  push(ele) {
    this.top += 1;
    this.stackArr[this.top] = ele;
    // return this.stackArr;
  }
  pop() {
    this.top -= 1;
    return this.stackArr[this.top];
  }
  peek() {
    return this.stackArr[this.top - 1];
  }
  clear() {
    this.top = 0;
  }
}


let s = new Stack()

s.push(11)
s.push(21)
s.push(31)
s.push(41)

console.log(s.length())
console.log(s.pop())
s.clear()
console.log(s.length())
