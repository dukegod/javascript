/**
 * Created by hui on 16/4/8.
 */
function convertArray(){
  return Array.prototype.slice.call(arguments);
}
var i = convertArray(1,2,3,4,5);
console.log(i);
