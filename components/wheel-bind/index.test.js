import polyfillBind from './index';

const targetObj = {
  name: 'object name'
}
function targetFunc() {
  this.name = 'targetFunc'
}


function testBind(...params) {
  console.log(params);
  console.log(this.name);
}

// testBind()

// testBind.bind(targetFunc, 1,2,3,4)(5, 6);

// testBind.bind(targetObj)();

polyfillBind(testBind, targetObj, 2,3,4)
// polyfillBind(testBind, targetFunc)
