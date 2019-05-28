const obj = {
  x: 1
}

const proxy = new Proxy({}, {
  get(target, p, receiver) {
    console.log(999)
  }
})

Object.setPrototypeOf(obj, proxy);

console.log(obj.x)
console.log(obj.y);

