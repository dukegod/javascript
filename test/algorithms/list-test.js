const assert = require('assert');
const Node = require('../../algorithms/list');

describe('return', () => {
  it('should return 1', () => {
    assert.equal(new Node(), 1);
  });
})
