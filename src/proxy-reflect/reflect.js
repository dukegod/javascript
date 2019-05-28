
const obj = {
  a: 1,
  b() {
    console.log(this);
    console.log(this.a);
    return this.a;
  }
};

Reflect.get(obj, 'a');
// console.log(obj.b());

Reflect.set(obj, 'a', 2);
