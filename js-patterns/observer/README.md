# 观察者模式

观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

使用观察者模式的好处：

支持简单的广播通信，自动通知所有已经订阅过的对象。 
页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。  
目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。  

![image](https://user-gold-cdn.xitu.io/2017/11/22/15fe1b1f1797e09a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

[发布订阅者模式](https://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)


```js
document.addEventListener('click', ()=>{
  console.log(1)
})
document.addEventListener('click', ()=>{
  console.log(2)
})
document.addEventListener('click', ()=>{
  console.log(3)
})
document.click();




document.addEventListener('touch', ()=>{
  console.log('touch')
})
```
