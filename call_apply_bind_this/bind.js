var x = 10;

var obj = {
  x: 11,
  sum: function(){
    return this.x
  }
}

console.log(obj.sum());

var objj = obj.sum;
console.log(objj());


// 在node 环境中，thisz指向为node
// 
// 
// 