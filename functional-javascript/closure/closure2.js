function closerFunc(val) {
  return function(val) {
    return val+'-----out val'
  }
}

var t = closerFunc(100);
console.log(t)
var t2 = t(2);
console.log(t2)
