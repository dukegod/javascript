const animal = {
  name: 'dog',
  introduce1: () => {
    console.log(this.name)
  },
  introduce2: function() {
    console.log(this.name)
  },
  introduce3: () => {
    return () => {
      console.log(this.name)
    }
  },
  introduce4: () => {
    return function() {
      console.log(this.name)
    }
  },
  introduce5: function() {
    return () => {
      console.log(this.name)
    }
  }
};

animal.introduce1(); //undefined
animal.introduce2(); //dog
animal.introduce3()(); //undefined
animal.introduce4()(); //undefined
animal.introduce5()(); //dog```;  // 箭头函数外层包一层函数，此时的this已经运行，所以指向obj

// 箭头函数内部 this 指向函数定义时所在的对象。
// 返回undefined问题是，定义时 obj 没有运行，所以 this 指向全局环境。