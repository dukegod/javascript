hello();
function hello(){
	console.log('hello js');
}

var hello2 = function(){
	console.log('hello2 js');
}
hello2();

(function(e){
	console.log(e);
})(2);

// var result = (function () {
//             console.log(2);
//         })();

var auto = (function(){
	console.log('auto message');
})() 

var auto = (function(){
	console.log('auto message2');
}())



function person(callback,name,age){
	callback(name,age);
}
function output(name,age){
	console.log(name+':'+age);
}
new person(output,'zs',18);


function add(n){
	if(n<=1){
		return 1;
	}else{
		return n+add(n-1)
	}
}
// var i= add(4);
console.log(add(4));



