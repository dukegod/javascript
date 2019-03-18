/*
* 观察者模式
* 按照订阅的类型不一样，分别触发
*/

class Observer {
  constructor() {
    this.queue = []
  }
  addListen(fn) {
    this.queue.push(fn)
  }
  trigger() {
    const [ message ] = [...arguments];
    const fns = this.queue;
    fns.map( fn => fn.apply(null, arguments))
  }
  removeListen(fn) {
    const fns = this.queue;
    this.queue = fns.filter(item => item.name !== fn.name);
    console.log(this.queue)
  }
}



const publicer = new Observer();
publicer.addListen(function name1(params) {
  console.log(`打电话给给订阅者1---${params}`)
})
publicer.addListen(function name2(params) {
  console.log(`打电话给给订阅者2---${params}`)
})
publicer.addListen(function name3(params) {
  console.log(`打电话给给订阅者3---${params}`)
})
publicer.removeListen(function name3() {})

// 触发者

setTimeout(() => {
  publicer.trigger('从接口获取的数据')
}, 1000);

