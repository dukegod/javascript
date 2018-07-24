class Person{
  constructor(name) {
    this.name = name
  }
  showName() {
    console.log(`显示name${this.name}`);
  }
}


function Person() {}
Object.defineProperty(Person, "name", {
  value: name,
  enumerable: false,
  configurable: true,
  writable: true
});
Object.defineProperty(Person.prototype, "showName", {
    value: console.log(`显示name${this.name}`),
    enumerable: false,
    configurable: true,
    writable: true
});