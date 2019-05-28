/**
 * for -in
 */

const arr = [1, 2, 3, 4];
const obj = {
  x: 1,
  y: 2
};

for (let prop in arr) {
  console.log('obj.' + prop + ' = ' + arr[prop]);
}

for (let prop in obj) {
  if (prop === 'y') {
    break;
  }
  console.log('obj.' + prop + ' = ' + obj[prop]);
}

