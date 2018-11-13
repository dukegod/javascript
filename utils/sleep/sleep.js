/**
 * 实现阻塞延迟
 * @param delay 延迟的时间
 */
function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

module.exports = sleep
// new Promise(function(resolve) {
//   console.log(new Date()*1);
//   resolve()
// })
// .then(sleepPromise(3000))
// .then(function() {
//   console.log(new Date()*1)
//  })
// function sleep(delay) {
//   const start = new Date()*1;
//   while (new Date()*1 - start < delay) {
//     continue;
//   }
// }
// new Promise(function(resolve) {
//   console.log(new Date()*1);
//   resolve()
// })
// .then(sleep(3000))
// .then(function() {
//   console.log(new Date()*1)
// })
