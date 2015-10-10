//
//构造函数中this的指向问题
//
//this在构造函数中可以当作全局的属性
//this指向新生成的实例

// apply call this指向调用的上一级


function Person(name,age){
	this.name=name;
	this.age=age;
}

Person.prototype.out=function(){
	console.log(self);//Person { name: 'lh', age: 18 }
	console.log(this.name+':'+this.age);
}

function Student(name,age,id){
	Person.apply(this,[name,age]);//或是用apply都行
	this.id=id;
}
Student.prototype.output=function(){
	console.log(this.name+':'+this.age+';'+this.id);
}

new Person('lh',18).out();
new Student('KK',18,'XUESHENG').output();