var pingpong = (function() {
  var PRIVITE = 1;
  return {
    inc: function(n) {
      return PRIVITE += n;
    },
    dec: function(n) {
      return PRIVITE -= n;
    }
  }
})();

pingpong.div = function(n){
  return PRIVITE/n
}

var t = pingpong.inc(8);
console.log(t);
var td = pingpong.div(8);
console.log(td); // ReferenceError: PRIVITE is not defined
