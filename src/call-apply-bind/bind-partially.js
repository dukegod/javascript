function polyfillBind(func, target, ...params) {
  // func 是不是函数
  // target 判断
  console.log(func)
  // 收集传入的参数
  const args = params;
  return function () {
    return func.apply(target, args.concat(...arguments));
  }
}


function list() {
  return Array.prototype.slice.call(arguments);
}


var list1 = list(1, 2, 3); // [1, 2, 3]
// Create a function with a preset leading argument
// var leadingThirtysevenList = list.bind(null, 37);
var leadingThirtysevenList = polyfillBind(list, null, 37);


var list2 = leadingThirtysevenList();
// [37]
console.log(list2);
var list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3);
// [37, 1, 2, 3]
