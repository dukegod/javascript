import {
  assert
} from 'chai';

import {
  PHONE_RGX,
  regExpTest,
  phoneEncryption
} from './index';

describe('手机号', () => {
  it('true', () => {
    assert.equal(regExpTest(PHONE_RGX, 17889007890), true);
  })
  it('false', () => {
    assert.equal(regExpTest(PHONE_RGX, 1788900780), false);
  })
})

describe('手机号中间脱敏处理', () => {
  it('手机号中间脱敏处理', () => {
    assert.equal(phoneEncryption(17889007890), '178****7890');
  })
})

