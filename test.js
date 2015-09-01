var p = {};
p.a= 90;
var b = p;
b.a= 89;
// console.log(b instanceof p);
console.log('first' + p.a);




function ff(){
	this.a= 0;
	this.b = function(){
		this.a = 90;
		console.log(this.a);
	}
}
ff.prototype= {
	b:function(){
		// this.a= 100;
		var a =100;
		console.log(a);
	},
	t: 'dd',

}
var f = new ff();
console.log(ff.t);


console.log('second message');


var ab = 5&4;
console.log('ab'+ab);

console.log('third message');

ls 
var x = 1;
var y = '2';
var c = x>y?5:4;
console.log(c);




var t = 'adv123';
var tt = parseInt(t)
console.log(tt);



function fun(a,b,c){
	var l = arguments.length;
	console.log('length'+l);
	var sum = 0;
	for(var i=0;i<l;i++){
	 console.log(arguments[i]);
	 sum= sum+arguments[i];
	}
	return sum;
}
var p= fun(1,2,3,1,1,1,1);
console.log('p'+p);




(function(){
  for(var i=0;i<5;i++){
	console.log('inner'+i);
	// break;
	continue;
  }	
  console.log('outer'+i);
})();



function qq (argument) {
	// console.log(this);
	t = this;
	b = '123';
	function aa()
	{
		var tt = this;
		// console.log(tt);
		o = t;
		// console.log(o);
		console.log('run');

	}
	return aa;
}


var obj = qq();
obj();
console.log(o.b);



function Person(name,age){
	this.name=name;
	this.age=age;
}

Person.prototype.out=function(){
	var self=this;
	// console.log(self);
	console.log(this.name+':'+this.age);
}

new Person('dd',90).out()




