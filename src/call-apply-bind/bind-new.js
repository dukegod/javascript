function polyfillBind(func, target, ...params) {
  // func 是不是函数
  // target 判断
  // console.log(func)
  // 收集传入的参数
  const args = params;


  var Bfunction = function () {
    //  用来判断是不是new对象传递过来的
    var _this = this instanceof func ? this : target;

    return func.apply(_this, args.concat(...arguments));
  }

  Bfunction.prototype = func.prototype;

  return Bfunction;
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

