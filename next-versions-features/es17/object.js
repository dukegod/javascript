// 对象结构
const fruit = {
  apple: 3,
  banana: 89,
  water: 90,
  grape: 100,
  set valPro(x) {
    this.pp = x
  },
  get valPro() {
    return this.pp
  }
}


// 验证 values
// es2015
const value = Object.keys(fruit).map(key => fruit[key])
console.log(value)
// es17
const values = Object.values(fruit);
console.log(values)


// 验证 object.entries
for(let [key, val] of Object.entries(fruit)) {
  console.log(`key-${key}; val-${val}`)
}

// 对象转为map 结构
const fruitMap = new Map()
Object.keys(fruit).forEach(key=>{
  fruitMap.set(key, fruit[key])
})
console.log(fruitMap)

const mapex = new Map(Object.entries(fruit))
console.log(mapex)

// Object.assign 和 Object.getOwnPropertyDescriptors
// 以及 Object.defineProperties
// 将原始对象 Car 复制到新对象 ElectricCar 的区别

console.log(Object.getOwnPropertyDescriptor(fruit, 'valPro'))
// { get: [Function: get valPro],
//   set: [Function: set valPro],
//   enumerable: true,
//     configurable: true
// }
const ba = Object.assign({}, fruit);
console.log(Object.getOwnPropertyDescriptor(ba, 'valPro'))
// {
//   valPro: undefined
//   enumerable: true,
//   configurable: true
// }

const ogd = Object.defineProperties({}, Object.getOwnPropertyDescriptors(fruit));
console.log(Object.getOwnPropertyDescriptor(ogd, 'valPro'))
