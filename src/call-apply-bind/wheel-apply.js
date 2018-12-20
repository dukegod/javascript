Function.prototype.applyWheel = function (thisAry) {
  let context = thisAry || {};
  context.fn = this;
  const result = context.fn(...arguments);
  delete context.fn;
  return result;
}


function a(params) {
  console.log(this)
}

a.apply({}, [1,2,3])
a.applyWheel({}, [1,2,3])
