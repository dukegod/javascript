Function.prototype.Bbind = function (thisArgs) {
  console.log(arguments)
  var fn = this,
    slice = Array.prototype.slice,
    args = slice.call(arguments, 1);
  console.log(args)
  return function () {
    return fn.apply(thisArgs, args.concat(slice.call(arguments)));
  }
}

function abc(e) {
  console.log(this)
}

var obj = {
  name: 90,
  age: 89
}

var A = abc.Bbind(obj)

A();
