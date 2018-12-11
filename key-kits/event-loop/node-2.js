// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile('./mutation.html', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
