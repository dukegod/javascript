# http

## http 服务端

http 提供三个方法用来创建服务器对象

1，http.server

+ request
+ connection
+ close

2，http.ServeRequest: http的请求信息，由http.server 的request事件发送。

HTTP请求分为两个部分：请求头与请求体  

### 请求头

请求头在请求解析完成后立即读取   
```js
const header = req.header()
```

### 请求体

请求体需要一定时间传输，通过3个事件控制请求体传输：
+ data
+ end
+ close

对于get与post方法处理

+ get   请求的参数直接可以在url中获取，直接解析
+ post  请求需要通过事件监听，获取最终的数据

3，http.ServerResponse: http的响应信息，由http.server 的response事件发送。主要方法：

+ response.writeHead()
+ response.write(data, [encoding])
+ response.end(data, [encoding])

## http 客户端

http模块提供两个函数作为客户端向http服务器发动请求, 头部信息作为options参数传入

+ http.request(options)
+ http.get: 作为简化版本的http.request, 只作为GEt请求，不需要手动`req.end()`

1, http.ClientRequest 类似 http.ServerResponse    
用于向服务器发动请求体，通常用于post,put 等操作，所有的写结束必须调用 `end`通知服务器，否则无效

2，http.ClientResponse 类似 http.ServerRequest

接受服务器的数据，通过`data`, `end`, `close`监听数据的传输

+ response.setEncoding()
+ response.pause() : 暂定接收数据和发动事件，方便下载功能
+ response.resume()：从暂停的状态中恢复数据
