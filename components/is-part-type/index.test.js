import {
  assert
} from 'chai';

import {
  isPartChinese,
  isPartLowercase,
  isPartUppercase
} from './index';


describe('isPartChinese', () => {

  it('undefind ', () => {
    assert.equal(isPartChinese(), undefined);
  })

  it(' null ', () => {
    assert.equal(isPartChinese(null), null);
  })

  it('not string ', () => {
    assert.equal(isPartChinese({}), 'not string');
  })

  it('汉字判断', () => {
    assert.equal(isPartChinese('汉字判断eF'), true)
  })

  it('uppercase', ()=> {
    assert.equal(isPartChinese('A'), false)
  })

  it('lowercase', ()=> {
    assert.equal(isPartChinese('a'), false)
  })
})

describe('isPartLowercase', () => {

  it('undefind ', () => {
    assert.equal(isPartLowercase(), undefined);
  })

  it(' null ', () => {
    assert.equal(isPartLowercase(null), null);
  })

  it('not string ', () => {
    assert.equal(isPartLowercase({}), 'not string');
  })

  it('汉字判断', () => {
    assert.equal(isPartLowercase('汉字判断3Fe'), true)
  })

  it('uppercase', ()=> {
    assert.equal(isPartLowercase('A'), false)
  })

  it('lowercase', ()=> {
    assert.equal(isPartLowercase('a'), true)
  })
})

describe('isPartUppercase', () => {

  it('undefind ', () => {
    assert.equal(isPartUppercase(), undefined);
  })

  it(' null ', () => {
    assert.equal(isPartUppercase(null), null);
  })

  it('not string ', () => {
    assert.equal(isPartUppercase({}), 'not string');
  })

  it('汉字判断', () => {
    assert.equal(isPartUppercase('汉字判断dddFFF'), true)
  })

  it('uppercase', ()=> {
    assert.equal(isPartUppercase('A'), true)
  })

  it('lowercase', ()=> {
    assert.equal(isPartUppercase('a'), false)
  })
})
