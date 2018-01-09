// ArrayDeleteIndex.js
Array.prototype.indexRemove = function(num){
  if (isNaN(num) || num > this.length) {
    return false;
  }
  this.splice(num, 1);
}

var arr = ["a", "b", "c", "d"];
arr.indexRemove(2);
console.log(arr);
