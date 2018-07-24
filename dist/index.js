/*!
 * github:https://github.com/
 * API
 * Copyright All Rights Reserved
 * Licensed
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.umddd = factory());
}(this, (function () { 'use strict';

  var testF = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var NUMBER;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              NUMBER = 900;
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                console.log(333390);
                resolve(NUMBER);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function testF() {
      return _ref.apply(this, arguments);
    };
  }();

  function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

  return testF;

})));
