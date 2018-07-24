
var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];

var ii =arr.reduce(function (p, k, index, array) {
  console.log('index====',index);
  console.log('array====',array);
  console.log('p====',p);
  console.log('k====',k);

  return p[k] ? (p[k]++) : (p[k] = 1), p;

},{});

console.log(ii)

/**
 * reduce 接受一个对象{}最为初始值，每次执行的结果作为p的回调结果继续执行，一直到最后一个k结束
 *
 * return 顺序执行，先判断对象有没有这个属性，没有就赋值为1，有了就加1，最后返回p继续回调
 */





