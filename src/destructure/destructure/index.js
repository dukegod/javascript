// 对于数组的解构

const a = [1, 2, 3];
const b = [4, 5];
const c = [...a, ...b];
console.log(c);


// 对数对象结构

const x = {
  a: 1,
  b: 2,
  c: function() {
    console.log(`c`)
  },
  d() {
    console.log(`d`)
  }
};

const y = {
  a: 2,
  e: 5
};

const z = {
  ...x, ...y
};
console.log(z);

// 函数参数结构

function destructure(...args) {
  console.log(args)
}
destructure(1,2,3,5);
