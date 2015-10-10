//
//指向全局的this 
//
//

console.log(this.document === document); // true
// In web browsers, the window object is also the global object:
console.log(this === window); // true
this.a = 37;//this.a 等价于 var a = 37;
console.log(window.a); // 37


