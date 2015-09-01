'use strict';
var p = {};
p.a= 90;
var b = p;
b.a= 89;
console.log(typeof b.a);
// var i = b instanceof p;
// console.log(i);
console.log('first' + p.a);
console.log(b.a);


var pp = new Object();
pp.a= 900;
var b = pp;
