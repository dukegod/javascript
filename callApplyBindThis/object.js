//
//作为对象的一个方法调用
// this指向方法所在的对象

var num = {
  sum: 0,
  add: function(x,y){
    this.sum = x + y;
    console.log(this);//{ sum: 5, add: [Function] }
  }
}
num.add(2,3);
console.log(num.sum);

