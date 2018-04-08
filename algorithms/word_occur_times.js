//
// 判断一个数组中字符出现的次数
//

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];

const ii = arr.reduce((p, k) => {
  console.log(p);
  console.log(k);
  return p[k] ? (p[k]++) : (p[k] = 1);
}, {});

console.log(ii)


// const countTime = arr.reduce((val, index) => {
//   // console.log(val);
//   // console.log(index);
//   if (index in val) {
//     val[index]++;
//   } else {
//     val[index] = 1
//   }
//   return val;
// }, {});

// console.log(countTime);

