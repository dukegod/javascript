/**
 * Created by hui on 02/02/2018.
 */

class Queue{
  constructor(){
    this.queueArr = []
  }
  push(ele) {
    this.queueArr.push(ele)
  }
  out(){
    return this.queueArr.shift()
  }
  clear(){
    this.queueArr.length = 0
  }
}

let q = new Queue()

q.push(1)
q.push(2)
q.push(3)
q.push(4)

console.log(q)
q.out()
console.log(q)
q.clear()
console.log(q)

var arr1 = [1,2,3,4];
console.log('arr1: ' + arr1);

function test(arr,n){
  console.log('innerarray: ' + arr);
  var arrinner = arr;
  console.log(arrinner.length)
  for(var i= 0; i< arrinner.length; i++){
    arrinner[i]+= n;
    // return arrinner;
  }
}
var arr2 = test(arr1,5);
console.log('arr2:' + arr2);

console.log('arr11: ' + arr1);