// 运用构造方法，实现继承

var Singleton = (function () {

  var _instance = null;

  var Person = function (name, age, nation) {
    console.log('person is not a one');
    this.name = name;
    this.age = age;
    this.nation = nation;
  };
  Person.prototype = {
    init: function () {
      console.log(this.name + ':age:' + this.age + ' nation ' + this.nation);
    },
    getName: function () {
      console.log(this.name);
    },
    setName: function (name) {
      this.name = name;
    }
  };

  return function(){
      if (_instance === null) {
        _instance = new Person('duke', 18, 'china');
      }
      return _instance;
    }();
})();

console.log(Singleton); // { getIns: [Function] }

console.log(Singleton.name);
