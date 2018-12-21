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

var obj = {}
function a(name) {
  this.name = name;
}

var re = polyfillBind(a, obj, 9000);
re();
console.log(obj)
