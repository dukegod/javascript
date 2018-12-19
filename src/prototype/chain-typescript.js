var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };
  return function (d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var Person = /** @class */ (function () {
  function Person(name, age) {
      this._name = name;
      this._age = age;
  }
  Object.defineProperty(Person.prototype, "upperName", {
      // 设置getter 方法
      get: function () {
          return this._name.toUpperCase();
      },
      enumerable: true,
      configurable: true
  });
  Person.prototype.showName = function () {
      console.log(this._name);
  };
  Person.prototype.showAge = function () {
      console.log(this._age);
  };
  return Person;
}());
var Son = /** @class */ (function (_super) {
  __extends(Son, _super);
  function Son(name, age, number) {
      var _this = _super.call(this, name, age) || this;
      _this._number = number;
      return _this;
  }
  Son.prototype.showNumber = function () {
      console.log(this._number);
  };
  return Son;
}(Person));
var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);
var son = new Son('son', 10, 1000);
