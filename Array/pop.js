var arr = ['a', 'b', 'c'];
arr.pop();
console.log(arr);

function arrOp(e) {
  var ab = [];
  if (ab.length <= 3) {
    // statement
    ab.unshift(e);
    console.log(ab);
  } else {
    ab.pop();
    ab.unshift(e);
    console.log(ab);
  }
}
arrOp('a');
arrOp('a1');
arrOp('a2');


