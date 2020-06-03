function exfunc() {
  console.log('export function')
}

exports.exfunc = exfunc;

// 另一种方式调用
exports.single = function () {
  console.log('single by exports.single function!')
}