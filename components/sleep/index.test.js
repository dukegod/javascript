
import {
  assert
} from 'chai';
import sleep from './index';

describe('sleep function', ()=>{
  it('out should be function ', () => {
    assert.typeOf(sleep, 'Function', 'should be function function');
  })

  it('should be block 3000ms before exe', () => {
    return new Promise((resolve)=>{
      resolve()
    })
    .then(sleep(3000))
    .then(()=>{
      assert.ok(true);
    })
  })
})
