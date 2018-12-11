//无论你怎么调整Promise和nextTick的顺序，永远输出的是1和2
Promise.resolve().then(() => console.log(2))
process.nextTick(() => console.log(1))
//Promise.resolve().then(() => console.log(2))放在这里也一样
Promise.resolve().then(() => console.log(3))
process.nextTick(() => console.log(4))
