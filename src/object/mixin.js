function mixin(receiver, supplier) {
  for (const key in supplier) {
    if (supplier.hasOwnProperty(key)) {
      receiver[key] = supplier[key];
    }
  }
  return receiver
}
function mixinUpgrade(receiver, supplier) {
  for (const key in supplier) {
    if (supplier.hasOwnProperty(key)) {
      const description = Object.getOwnPropertyDescriptor(supplier, key)
      Object.defineProperty(receiver, key, description)
    }
  }
  return receiver
}

// 构造函数
function Min() {}
var min = mixin(new Min(), {
  constructor: Min,
  age: 18,
  get name() {
    return 'min'
  }
})

console.log(min.name)
min.name = `modified name`
console.log(min.name)


var min2 = mixinUpgrade(new Min(), {
  constructor: Min,
  age: 19,
  get name() {
    return 'min'
  }
})
console.log(min2.name)
min2.name = `modified name2`
console.log(min2.name)

