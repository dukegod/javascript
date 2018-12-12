import {
  isTypeObject,
  isArray,
  isObject,
  isFunction,
  isString
} from './index';

import assert from 'assert';

describe('isTypeObject', function() {
  it('should return true', function() {
    assert.equal( isTypeObject({}) , true);
  });
  it('should return fals', function() {
    assert.equal( isTypeObject('') , false);
  });
});

describe('isArray', function() {
  it('should return true', function() {
    assert.equal( isArray([]) , true);
  });
  it('should return fals', function() {
    assert.equal( isArray({}) , false);
  });
});

describe('isObject', function() {
  it('isObject({}) should return true', function() {
    assert.equal( isObject({}) , true);
  });
  it('isObject("") should return false', function() {
    assert.equal( isObject('') , false);
  });
});

describe('isFunction', function() {
  it('isFunction should return true', function() {
    assert.equal( isFunction(function () {}) , true);
  });
});

describe('isString', ()=>{
  it('isString("") should be return true', ()=>{
    assert.equal(isString(''), true)
  })
})
