import {
  assert
} from 'chai';

import {
  isChinese,
  isLowercase,
  isUppercase
} from './index';


describe('isChinese', () => {

  it('undefind ', () => {
    assert.equal(isChinese(), undefined);
  })

  it(' null ', () => {
    assert.equal(isChinese(null), null);
  })

  it('not string ', () => {
    assert.equal(isChinese({}), 'not string');
  })

  it('汉字判断', () => {
    assert.equal(isChinese('汉字判断'), true)
  })

  it('uppercase', ()=> {
    assert.equal(isChinese('A'), false)
  })

  it('lowercase', ()=> {
    assert.equal(isChinese('a'), false)
  })
})

describe('isLowercase', () => {

  it('undefind ', () => {
    assert.equal(isLowercase(), undefined);
  })

  it(' null ', () => {
    assert.equal(isLowercase(null), null);
  })

  it('not string ', () => {
    assert.equal(isLowercase({}), 'not string');
  })

  it('汉字判断', () => {
    assert.equal(isLowercase('汉字判断'), false)
  })

  it('uppercase', ()=> {
    assert.equal(isLowercase('A'), false)
  })

  it('lowercase', ()=> {
    assert.equal(isLowercase('a'), true)
  })
})

describe('isUppercase', () => {

  it('undefind ', () => {
    assert.equal(isUppercase(), undefined);
  })

  it(' null ', () => {
    assert.equal(isUppercase(null), null);
  })

  it('not string ', () => {
    assert.equal(isUppercase({}), 'not string');
  })

  it('汉字判断', () => {
    assert.equal(isUppercase('汉字判断'), false)
  })

  it('uppercase', ()=> {
    assert.equal(isUppercase('A'), true)
  })

  it('lowercase', ()=> {
    assert.equal(isUppercase('a'), false)
  })
})
