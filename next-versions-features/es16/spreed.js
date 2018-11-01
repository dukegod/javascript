// 对象拼接
const obj = {
  type: 'A',
  name: 'abc',
  dates: {
    age: 90
  }
}

const obj2 = {
  name: 'abcd',
  dates: {
    age: 90,
    name: 'd'
  }
}

const o = {
  ...obj,
  ...obj2
}

console.log(o)

//
