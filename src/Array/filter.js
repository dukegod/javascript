/**
 * Created by hui on 16/5/3.
 */

var arr = [1,2,3,4,5,6];

var b = arr.filter(function(v,i,arr){
  "use strict";
  return v < 3;
})
console.log(b);



