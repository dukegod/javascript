/**
 * Created by hui on 16/5/3.
 */

var arr = [1,2,3,4,5];
var sum = arr.reduce(function(a,b){
  console.log('a----',a);
  console.log('b',b);
  return a+b
});
console.log(sum)

/**
 * 返回的结果作为第一个参数的回调
 *
 */


