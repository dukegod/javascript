// timeout_vs_immediate.js
setTimeout(function () {
  console.log('globle timeout');
}, 0);

setImmediate(function () {
  console.log('globle immediate');
});

// timeout_vs_immediate.js
var fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('fs timeout');
  }, 0);
  setImmediate(() => {
    console.log('fs immediate');
  });
});
