// import polyfillBind from './index';

// // 测试用例
// const targetObj = {}
// function targetFunc() {}

// // to bind  函数
// function toBindFunc(name) {
//   this.name = name
//   // console.log(params);
//   console.log(this.name);
// }

// // 测试绑定1  通过
// let test1 =  polyfillBind(toBindFunc, targetObj);
// test1('test1');
// console.log(targetObj)
// console.log(targetObj.name);
// var test2 = polyfillBind(toBindFunc, targetObj, 'test2')
// test2()
// console.log(targetObj.name)


// 测试绑定2 带有参数
// let test2 =  polyfillBind(toBindFunc, targetObj, 'test2');
// test2();
// console.log(test1.name);


