/**
 * Created by hui on 16/7/18.
 */
'use strict';
var reverseString = function(s) {
  var
    l ,
    i,
    arr,
    item,
    reverserArr = [];
  arr = s.split('');
  l = s.length;
  for (i = 0; i< l; i++){
    item =  arr.pop();
    reverserArr.push(item);
  }
  console.log(reverserArr.join('').toString());
  return reverserArr.join('').toString();
};

var outString = reverseString('hello');
console.log(outString);


