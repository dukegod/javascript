/**
 * 这个是用来实现具体功能的类
 * @param name 名称
 */
class BaseInstance {
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

/**
 * 用来对外发布，保持内部类的对立性的闭包函数
 */
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
      instance = new BaseInstance(defaultOpt);
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

