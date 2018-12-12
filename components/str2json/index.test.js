import {strToJson} from './index';

import {
  assert
} from 'chai';

const str = "a=90,b=80,c=99";
console.log(strToJson(str));
describe('strTojson', ()=>{
  it('out should be function ', () => {
    assert.typeOf( strToJson, 'function')
  })

  it('"a=90,b=80,c=99"object to equal "{"a":"90","b":"80","c":"99"}"', () => {
    assert.equal( strToJson(str), '{"a":"90","b":"80","c":"99"}')
  })
})
