
var persons = [];

persons[0] = ["zhangsan", 25];
persons[1] = ["lisi", 21];
persons[2] = ["wangwu", 32];

console.log(persons);
console.log(persons[1][2]);


var arr = [];

for (var k = 0; k < persons[k].length; k++) {
  console.log(persons[k].length + "length");
  arr[k] = persons[k];
  console.log(arr[k]);
}

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);







