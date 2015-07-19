//构造函数,个人习惯的方案

function Person(name,age){
	this.name = name;
	this.age = age;
	//自动执行的一种写法
}

Person.prototype.walk= function(){
	console.log('man can walk');
	return 'walk';
}


var p1 = new Person('duke',18);
console.log(p1.name+':'+p1.walk());
console.log(Object.prototype);


