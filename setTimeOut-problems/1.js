/**
 * Created by hui on 01/02/2018.
 * 最好理解的地方
 */

for (var i=0; i< 5; i++){
  console.log(`第一个函数输出值：${i}`)
}

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(`第2个函数输出值：${i}`)
  }, 1000 * i);
}