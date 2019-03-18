/*
* 观察者模式
* 时间监听不同的订阅类型
*/
const observer =  {
  queue: [],
  addListen(key, fn) {
    if (!this.queue[key]) {
      this.queue[key] = []
    }
    this.queue[key].push(fn)
  },
  trigger() {
    const [ key, message ] = [...arguments];
    const fns = this.queue[key];

    if (!key) {
      return ;
    }

    if (!fns) {
      return
    }
    fns.map( fn => fn.call(null, message))
  },
  removeListen(key, fn) {
    let fns;
    if (!key) {
      return
    }
    fns = this.queue[key];
    if (!fn) {
      fns && (fns.length = 0)
    }
    this.queue[key] = fns.filter(item => item.name !== fn.name);
  }
}


const EventInstall = function (obj) {
  const object = observer;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
  }
  return obj;
}


// 设定订阅者身份
const publicer = {};
EventInstall(publicer)
publicer.addListen('click', function name1(params) {
  console.log(`打电话给给订阅者1---${JSON.stringify(params)}`)
})
publicer.addListen('click', function name2(params) {
  console.log(`打电话给给订阅者2---${JSON.stringify(params)}`)
})
publicer.addListen('trigger', function name3(params) {
  console.log(params)
  console.log(`trigger1---${JSON.stringify(params)}`)
})
publicer.addListen('trigger', function name4(params) {
  console.log(`trigger2---${JSON.stringify(params)}`)
})
publicer.removeListen('trigger')

// 触发者

publicer.trigger('click', {
  name: 'click',
  age: 1998
})

setTimeout(() => {
  const data = {
    name: 1,
    age: 18
  }
  publicer.trigger('trigger', data)
}, 500);

