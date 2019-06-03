class Per{
  constructor(name){
    this.name = name;
    this.handle = this.handle.bind(this)
  }
  handle(){
    console.log(`handle`)
    console.log(this)
  }
  handleArrow = ()=>{
    console.log(`handlerArrow`)
    console.log(this)
  }
}

class Child extends Per{
  constructor(name, age){
    super(name)
    this.age = age;
  }
}

var per = new Per('person');
console.log(Per);
console.log(per)

var chd = new Child('child', 19);
console.log(Child);
console.log(chd)

