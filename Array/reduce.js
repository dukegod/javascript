/**
 * Created by hui on 16/5/3.
 */

var arr = [1,2,3,4,5];

console.log(arr instanceof Array);
console.log(Array.isArray(arr));

var b = arr.reduce(function(a,b){
  "use strict";
  return a+b
});
console.log(b);
