const {
  assert
} = require('chai')

const sleep = require('./sleep')

assert.typeOf(sleep, 'function');


// it('should complete this test', function (done) {
//   return new Promise(function (resolve) {
//     assert.ok(true);
//     resolve();
//   })
//     .then(sleep(3000))
//     .then(()=>{
//       assert.ok()
//     });
// });
