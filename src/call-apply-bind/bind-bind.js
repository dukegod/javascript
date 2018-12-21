
function slice() {
  return Function.prototype.apply.bind(Array.prototype.slice)
}

console.log(slice());

