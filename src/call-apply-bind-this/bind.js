Function.prototype.Bbind = function (TargetToBind) {
  console.log(arguments)
  console.log(this)
  var fn = this,
    slice = Array.prototype.slice,
    args = slice.call(arguments, 1);
  console.log(args)
  return function () {
    return fn.apply(TargetToBind, args.concat(slice.call(arguments)));
  }
}

function abc(e) {
  console.log(arguments)
  console.log(this)
}

var obj = {
  name: 90,
  age: 89
}

var A = abc.Bbind(obj, 2,3,4,5)

A();
