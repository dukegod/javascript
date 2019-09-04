
const obj = {
  name: '123'
}

Object.seal(obj)

obj.name = 90
obj.age = 100

console.log(obj)
