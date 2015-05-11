var persons = new Array();

persons[0] = new Array();
persons[1] = new Array();
persons[2] = new Array();
// persons[0][0] = "zhangsan";
// persons[0][1] = 25;
// persons[1][0] = "lisi";
// persons[1][1] = 22;
// persons[2][0] = "wangwu";
// persons[2][1] = 32;
persons[0] = ["zhangsan", 25];
persons[1] = ["lisi", 21];
persons[2] = ["wangwu", 32];
console.log(persons);
console.log(persons[1][2]);


var arr = new Array();

for(var k=0;k<persons[k].length;k++){
	console.log(persons[k].length+"length");
	arr[k]= persons[k];
	console.log(arr[k]);
}

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}; 

console.log(person);







