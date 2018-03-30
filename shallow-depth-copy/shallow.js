// var obj = {
//   a: 1,
//   b: 2,
//   c: {
//     ca: 31,
//     cb: 32,
//     cc: 33,
//     d: {
//       da: 41,
//       db: 42,
//       dc: 43,
//       dd: 45
//     }
//   }
// };

// var result = Object.assign({}, obj);
// console.log(obj);
// obj.e = {
//   ea: 51
// }
// console.log(result);

const obj = {
  name: 'wsscat',
  age: 0,
  add: {
    a: 'beijing',
  },
};
// var obj2 = Object.assign({}, obj);
let obj2 = obj;
obj2.age = 18;
obj2.add.a = 'shanghai';
console.log(obj);
console.log(obj2);

