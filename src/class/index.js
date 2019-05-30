class Person {
  constructor(_name){
    this.name = _name
  }
  handle = ()=> {
    console.log(999)
  }

}

const person = new Person('p');
person.handle()
