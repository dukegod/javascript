// 成员变量采用对象冒充方式，成员方法采用原型链方式
function Person(name){
     this.name = name;
}
Person.prototype.say = function(){
     console.log('My name is '+this.name);
}



function F2E(name,id){
     Person.call(this,name);
     this.id = id;
}
F2E.prototype = new Person();
console.log(F2E.constructor);


//此处注意一个细节，showId不能写在F2E.prototype = new Person();前面
F2E.prototype.showId = function(){
     console.log('Good morning,Sir,My work number is '+this.id);
}

var simon = new F2E("Simon",9527);
console.log(simon instanceof F2E);
simon.say();
simon.showId();

