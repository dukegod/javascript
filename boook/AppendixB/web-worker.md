# Worker

为web开启一个单独的浏览器线程，

## 特点

+ 可以用来处理费时的大数量处理
+ XML请求。

## 数据通信

线程通信通过消息机制

+ postMessage： 发送消息
+ onmessage：处理响应消息
+ onerror: 处理错误信息


## 实践用法

`worker` 分为专有worker 与 共享worker

### 专有worker实例化

实例化一个work对象，创建一个`work.js`用来处理worker线程数据

index.html 中加载work.js
```js
const workInstance = new Worker('work.js');

// 传递数据
workInstance.postMessage({data: '来自主线程的数据'});
// 接受数据
workInstance.onmessage = function (e) {
    const {data} = e;
    console.log(`来自子线程中的数据：${data}`)
}
```

work.js 中的逻辑

```js
// 接受来自父线程中的数据
onmessage = function (e) {
    const {data} = e;
    console.log(`来自父线程中的数据：${data}`)

    // 传递数据到父线程中
    postMessage({data: '来自处理后的子主线程的数据'});
}
```

### 共享worker实例化

共享的worker是页面可以让多个页面引用，与专有的区别就是必须通过`port`字段进行消息的通信

index.html 中实现的方法

```js
const workIns = new SharedWorker('share.js');

workIns.port.postMessage({
    top: e.target.value
})

workIns.port.onmessage = function (e) {
    // 来自work。js的消息
    console.log(`来自子 work。js的消息, ${JSON.stringify(e)}`)
}
```

share.js 中实现方法,

```js
onconnect = function (e) {
  // console.log(`来自 主线程 work。js的消息, ${JSON.stringify(e)}`)
  const port = e.ports[0];
  console.log(port)
  port.onmessage = function (e) {
    console.log(`来自 主线程 work。js的消息, ${JSON.stringify(e)}`)
    const data = e.data;

    port.postMessage({
      top: parseInt(obj.top, 10),
      bot: parseInt(obj.bot, 10)
    })
  };
};
```

**注意点**： `share.js`中的数据没有办法在浏览器中动态调试，很是费解。



