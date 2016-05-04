/**
 * Created by hui on 16/5/3.
 */

"use strict";

var arr = [12,33,44,111,4444,433333,9999];
console.log(arr.sort());

var b = arr.sort(function(a,b){
  return a-b;
})
console.log(b);