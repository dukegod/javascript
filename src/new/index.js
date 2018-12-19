
function Person(name) {
  this.name = name || 'Person'
}
Person.prototype.showName = function (params) {
  console.log(this.name)
}

const person = new Person('personperson')
console.log(person);


//  与下面的作用相同
var person = {};
person._proto_ = Person.prototype;
Person.call(person, "personperson");
