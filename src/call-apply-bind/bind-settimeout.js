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



function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
// 在 1 秒钟后声明 bloom
LateBloomer.prototype.bloom = function() {
  // setTimeout(this.declare.bind(this), 1000);
  setTimeout( polyfillBind(this.declare, this) , 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  // 一秒钟后, 调用'declare'方法
