/**
 * create by liuhui
 * 2017-08-03
 */

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '/lh.txt'), (err, val) => {
  if (err) {
    console.error(err);
  }
  // console.log(val);

  fs.writeFile(path.join(__dirname, '/lh.min.txt'), val, (err2, val2) => {
    if (err2) {
      console.error(err2);
    }
    console.log(val2);
  });
});
