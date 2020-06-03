/*
* multiple module
**/
function A() {
  console.log('a');
}
function B() {
  console.log('B');
}

function C() {
  console.log('C');
}

module.exports = A;
module.exports.B = B;
module.exports.C = C;
