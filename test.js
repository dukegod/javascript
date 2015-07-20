var p = {};
p.a= 90;
var b = p;
b.a= 89;
console.log(p.a);




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





var ab = 5&4;
console.log('ab'+ab);




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
	for(var i=0;i<l;i++){
		var sum;
		console.log(arguments[i]);
		console.log(typeof(arguments) );
		sum= sum+arguments[i];
	}
	return sum;
}
var p= fun(1,2,3);
console.log(p);




(function(){
  for(var i=0;i<5;i++){
	console.log('inner'+i);
	// break;
	continue;
  }	
  console.log('outer'+i);
})();






