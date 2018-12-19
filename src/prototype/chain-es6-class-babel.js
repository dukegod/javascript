"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = (function() {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "showName",
      value: function showName() {
        console.log(this.name);
      }
    },
    {
      key: "showAge",
      value: function showAge() {
        console.log(this.age);
      }
    },
    {
      key: "upperName",
      get: function get() {
        return this.name.toUpperCase();
      }
    }
  ]);

  return Person;
})();

var Son = (function(_Person) {
  _inherits(Son, _Person);

  function Son(name, age, number) {
    _classCallCheck(this, Son);

    var _this = _possibleConstructorReturn(
      this,
      (Son.__proto__ || Object.getPrototypeOf(Son)).call(this, name, age)
    );

    _this.number = number;
    return _this;
  }

  _createClass(Son, [
    {
      key: "showNumber",
      value: function showNumber() {
        console.log(this.number);
      }
    }
  ]);

  return Son;
})(Person);

var person1 = new Person("pson", 18);
var person2 = new Person("pson2", 19);
var son = new Son("son", 10, 1000);
