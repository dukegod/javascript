import { assert } from 'chai';
import { fontTrans } from './index';

describe('is-chinese', () => {
  assert.equal(fontTrans('111'), false);
});

