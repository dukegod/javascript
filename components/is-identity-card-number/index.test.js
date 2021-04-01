import {isCard} from './index';

import {
  assert
} from 'chai';

describe('身份证校验', () => {
  it('正确', () => {
    assert.equal(isCard(342222199802034417), true);
  })
})

