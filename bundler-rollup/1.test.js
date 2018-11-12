const assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should retur -1', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
