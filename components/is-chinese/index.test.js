import {
  assert
} from 'chai';

import isChinese from './index';


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
    assert.equal(isChinese('汉字判断'), '汉字')
  })

  it('uppercase', ()=> {
    assert.equal(isChinese('A'), 'uppercase string')
  })

  it('lowercase', ()=> {
    assert.equal(isChinese('a'), 'lowercase string')
  })
})
