console.log('start')
setTimeout(() => console.log(1), 200);

new Promise((resolve)=>{
  console.log('promise')
  resolve('then')
}).then((val)=>{
  console.log(val)
})

process.nextTick(() => console.log(2));

setImmediate(() => console.log(3));

setTimeout(() => {
  for (let i=0; i<1000; i++) {
    ;
  }
  console.log(4);
}, 99)
console.log('out side')
