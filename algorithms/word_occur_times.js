//
// 判断一个数组中字符出现的次数
//

var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];

var ii =arr.reduce((p, k)=> {
  return p[k] ? (p[k]++) : (p[k] = 1), p;
},{});

console.log(ii)
