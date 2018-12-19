class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 设置getter 方法
  get upperName() {
    return this.name.toUpperCase()
  }

  showName() {
    console.log(this.name);
  }
  showAge() {
    console.log(this.age);
  }
}


var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);

class Son extends Person {
  constructor (name, age, number) {
    super(name, age);
    this.number = number;
  }
  showNumber() {
    console.log(this.number);
  }
}
var son = new Son('son', 10, 1000);
