import { assert } from 'chai';

import contentLength from './index';

describe('contentLength', () => {
  it('返回数字的长度', () => {
    assert.equal(contentLength(123456), 6)
  });

  it('返回字符的长度', () => {
    assert.equal(contentLength('123456'), 6)
  })

  it('返回汉字的字符', () => {
    assert.equal(contentLength('汉字'), 4)
  })

  it('返回混合的组合', () => {
    assert.equal(contentLength('123abc汉字'), 10)
  })
});
