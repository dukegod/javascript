
var x = 1, y = 2;

function z() {
  var x = 2;
  return {
    x: x,
    y: function(a, b) {
      x = a + b;
    },
    z: function() {
      return x;
    }
  };
}

a = z();
a.y(x, y);

console.log(a.z(), a.x, x);