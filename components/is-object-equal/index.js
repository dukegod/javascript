/**
 * 判断两个对象是不是相等，
 * 注意点：
 * NaN === NaN false; NaN !== NaN true
 * -0 === +0 ,+0 === 0, -0 === 0: true
 * @param paramsA
 * @param paramsB
 */
function is(x, y) {
  console.log(x, y);
  if (x === y) {
    return x !== 0 || 1/x === 1 / y
  }
  return x !== x && y !== y
}

function shallowEqual (obj1, obj2) {
  if (obj1 === null && obj2 === null) {
    return true
  }
  if (obj1 === null || obj2 === null) {
    return false
  }
  if (is(obj1, obj2)) {
    return true
  }
  const obj1Keys = obj1 ? Object.keys(obj1) : [];
  const obj2Keys = obj2 ? Object.keys(obj2) : [];
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }

  for (let i = 0; i < obj1Keys.length; i++) {
    const obj1KeyItem = obj1Keys[i];
    if (!obj2.hasOwnProperty(obj1KeyItem) || !is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false
    }
  }

  return true
}


// console.log(is(-0,+0));
// console.log(is(-0,+0));
// console.log(shallowEqual(NaN, NaN));
// console.log(shallowEqual(0, -0));
console.log(shallowEqual('',[]));
// console.log(shallowEqual([],[]));
console.log(shallowEqual('',''));
// console.log(shallowEqual({},{}));
console.log(shallowEqual({
  a: 90,
  b: 90,
  c: 9
},{
  a: 90,
  b: 90,
  c: 9
}));
