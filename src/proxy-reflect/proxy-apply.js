const proxy = new Proxy(function(e) {
  console.log(e)
}, {
  apply(target, thisArg, argArray) {
    console.log(target, thisArg, argArray)
  }
})

proxy(23,33,34)
