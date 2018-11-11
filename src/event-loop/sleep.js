function sleep(delay) {
  const start = new Date()*1;
  while (new Date()*1 - start < delay) {
    continue;
  }
}

function task(t) {
  const t2 = new Date()*1;
  console.log('task', t2 - t);
}


console.log(1);
var time = new Date()*1;
setTimeout(()=>{
  task(time);
}, 1000);

sleep(5000)

