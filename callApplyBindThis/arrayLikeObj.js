/**
 * Created by hui on 16/4/8.
 */
 "use strict";
var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length : 5
};
  
var sliced = Array.prototype.slice.call( my_object );
console.log(sliced);



function convertArray(){
  return Array.prototype.slice.call(arguments);
}
var i = convertArray(1,2,3,4,5);
console.log(i);


