// 运用构造方法，实现继承
class Person {
  constructor(name) {
    this.name = name;
    let i = 0;
    console.log(`实例化次数:: ${i++}`);
  }
  init() {
    console.log(this.name);
  }
  getName() {
    console.log(this.name);
  }
  setName(name) {
    this.name = name;
  }
}

const singleTon = (function () {
  let instance = null;
  // const instant = function (defaultOpt) {
  //   if (!instance) {
  //     instance = new Person(defaultOpt);
  //   }
  //   return instance;
  // };
  // return instant;

  // 优化
  return function (defaultOpt) {
    if (!instance) {
      instance = new Person(defaultOpt);
    }
    return instance;
  };
}());

const a = singleTon('9090');
a.init();
a.setName('8888');
a.getName();
const b = singleTon('9092');
b.init();

