
var person = new Object();

person.name = 'duke';
person.age = 18;

console.log(person.name);

//duixiangzimainliang

var p ={
	name: 'liuhui',
	age: 99,
	say: function(){
		console.log(this);
		return '6666给外部的调用返回一个数值';
	}
}
console.log(p.name);
console.log(p.say()+'out');
console.log(p.constructor);


for(i in p ){

	console.log(p[i]+'/n');

}





