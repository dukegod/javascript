
var slice = Array.prototype.slice;
console.log(slice);

var ss = Function.prototype.call.bind(slice);
console.log(ss);

var ii = ss([1,2,3],0,1);
console.log(ii);


// out:
// [Function: slice]
// [Function: bound call]
// [ 1 ]
