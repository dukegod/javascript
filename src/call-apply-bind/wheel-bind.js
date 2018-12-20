Function.prototype.bindWheel = function(oThis) {
  //  判断调用者是不是函数
  if (typeof this !== 'function') {
    // internal IsCallable function
    throw new TypeError(
      'Function.prototype.bind - what is trying to be bound is not callable'
    );
  }

  //  手里参数
  var aArgs = Array.prototype.slice.call(arguments, 1);

  // 调用者缓存
  var fToBind = this;

  // 空函数
  var fNOP = function() {};

  //
  var fBound = function() {
    // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
    //  这个类型检测比较重要
    return fToBind.apply(
      this instanceof fNOP ? this : oThis,
      // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
      aArgs.concat(Array.prototype.slice.call(arguments))
    );
  };

  // 维护原型关系
  if (this.prototype) {
    // Function.prototype doesn't have a prototype property
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  fBound.prototype = new fNOP();

  return fBound;
};
