/**
 * 修改类的属性
 * 
 */

function readonly(target, name, descriptor) {
  discriptor.writable = false;
  return discriptor;
}
class Cat {
  @readonly
  say() {
      console.log("meow ~");
  }
}
var kitty = new Cat();
kitty.say = function() {
  console.log("woof !");
}
kitty.say()    // meow ~