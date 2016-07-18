function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Rectangle.prototype;

// 或者用下面的方法
// Square.prototype = Object.create(Rectangle.prototype, {
//   constructor: {
//     value: Square,
//     enumerable: true,
//     writable: true,
//     configurable: true
//   }
// });

var square = new Square(3);

console.log(square.getArea()); // 9
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true

console.log(Square.constructor);
console.log(Square.prototype);

console.log(Rectangle.constructor);
console.log(Rectangle.prototype);

