class Person {
  _name: string
  _age: number
  constructor(name:any, age:any) {
    this._name = name;
    this._age = age;
  }
  // 设置getter 方法
  get upperName() {
    return this._name.toUpperCase()
  }

  showName() {
    console.log(this._name);
  }
  showAge() {
    console.log(this._age);
  }
}

class Son extends Person {
  _number: number

  constructor (name: any, age:any, number:any) {
    super(name, age);
    this._number = number;
  }
  showNumber() {
    console.log(this._number);
  }
}

let person1 = new Person('pson', 18);
let person2 = new Person('pson2', 19);
let son = new Son('son', 10, 1000);
