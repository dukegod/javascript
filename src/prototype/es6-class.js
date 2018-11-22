
// class Parent{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   set (name) {
//     return this.name + '---parent';
//   }
//   get (name) {
//     return this.name;
//   }
//   walk() {
//     console.log(`${this.name}--${this.age}`);
//   }

//   edit(n, a) {
//     this.name = n;
//     this.age = a;
//   }
// }

// class Child extends Parent {
//   constructor(name,age, id) {
//     super(name, age)
//     this.id = id
//   }

//   set (id) {
//     return this.id+'---child';
//   }
//   get () {
//     return this.id;
//   }
//   edit(n, a, id) {
//     this.name = n;
//     this.age = a;
//     this.id = id;
//   }
//   show() {
//     console.log(`${this.name}--${this.age}--${this.id}`);
//   }
// }

// const parent = new Parent('parent', 20);
// console.log(parent);

// const child = new Child('child', 18, 'childID');
// console.log(child);

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}

class Programmer extends Person {
  constructor(name, programmingLanguage) {
    super(name);
    this._programmingLanguage = programmingLanguage;
  }

  get programmingLanguage() {
    return this._programmingLanguage;
  }

  set programmingLanguage(newprogrammingLanguage) {
    this._programmingLanguage = newprogrammingLanguage;
  }

  writeCode() {
    console.log(this._name + ' is coding in ' + this._programmingLanguage + '.');
  }
}

let bob = new Person('Bob');
bob.walk();

let cory = new Programmer('Cory', 'JavaScript');
cory.walk();
cory.writeCode();
console.log(cory.name);


// ES5 Prototype inheritance
function ES5Programmer(name, programmingLanguage) {
  this.name = name;
  this.programmingLanguage = programmingLanguage;
}

ES5Programmer.prototype = Object.create(Person.prototype);
ES5Programmer.prototype.constructor = Programmer;

ES5Programmer.prototype.writeCode = function() {
  console.log(this.name + ' is coding in ' + this.programmingLanguage + '.');
}

var cory = new ES5Programmer('Cory', 'JavaScript');
cory.walk();
cory.writeCode();
