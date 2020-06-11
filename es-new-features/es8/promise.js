const promises = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(2)),
  new Promise(resolve => resolve(3)),
]

// es15
async function test() {
  for (const obj of promises) {
    console.log(obj)
  }
}
test();

// es17
async function test17() {
  for await (const obj of promises) {
    console.log(obj)
  }
}
test17();
