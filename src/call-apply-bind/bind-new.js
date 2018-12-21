function polyfillBind(func, target, ...params) {
  // func 是不是函数
  // target 判断
  // console.log(func)
  // 收集传入的参数
  const args = params;
  return function () {
    return func.apply(target, args.concat(...arguments));
  }
}



// test
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  console.log(this.x + ',' + this.y);
};

var p = new Point(1, 2);
p.toString(); // '1,2'
var emptyObj = {};
// var YAxisPoint = Point.bind(emptyObj, 0);
var YAxisPoint =  polyfillBind(Point, emptyObj, 0);


var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'
console.log(axisPoint instanceof Point); // true
console.log(axisPoint instanceof YAxisPoint); // true

