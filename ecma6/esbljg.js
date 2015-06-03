// 变量结构

function do_something() {
  // console.log(foo); // ReferenceError
  let foo = 2;
}

 do_something();


 for(let i=0; i<7; i++ ){
 	// console.log(i);
 }

 // var [a, b, c] = [1, 2, 3];
 // console.log(a);

// function example() {
//   return [1, 2, 3];
// }
// var [a, b, c] = example();

// console.log(b);

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = example();
console.log(foo);


var person = {
	a1: 'du',
	b1: 18,
	c1: 'beijing china'
}

let { a1, b1, c1 } = person;
console.log(a1, b1, c1);

var jsonData = {
  id: '42',
  status: "OK",
  data: [867, 5309]
}

let { id, status, data: number } = jsonData;

console.log(id, status, number)
