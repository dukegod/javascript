//  值传递
// 即使拷贝一个副本

var n = 1;

function dd(n) {
  var n = n + 1;
  return n;
}

console.log('dd():' + dd(n));
console.log('outer:' + n);
