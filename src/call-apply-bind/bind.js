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



this.x = 9; // 在浏览器中，this指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() {
    console.log(this.x);
  }
};



module.getX(); // 81
var retrieveX = module.getX;
retrieveX();  // 9
// var boundGetX = retrieveX.bind(module);
var boundGetX = polyfillBind( retrieveX, module);
boundGetX(); // 81
