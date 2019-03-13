# http缓存

## 名词解析

### 设置方法

+ META : 代理服务器不解析html，故而解析不了`head`；浏览器支持度不一致
+ http header


### 相关字段

控制缓存优先级别从小到大

+ Pargma： HTTP/1.0 中规定的通用首部
+ Expires：HTTP/1.0 中规定的通用首部
+ Cache-control：HTTP/1.1 中规定的通用首部

#### Expires

设定过期日期，用的是绝对时间

#### Cache-control

常见的请求字段

```html
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache 
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

常见的响应字段

```html
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
```

#### Pragma 与 Cache-Control

**Pragma: no-cache 与 Cache-Control: no-cache 效果一致**

强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证

#### Expires 与 Cache-Control

**如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。**


#### Last-Modified/If-Modified-Since

要配合Cache-Control使用。

Last-Modified：标示这个响应资源的最后修改时间。web服务器在响应请求时，告诉浏览器资源的最后修改时间。

If-Modified-Since：当资源过期时（使用Cache-Control标识的max-age），发现资源具有Last-Modified声明，则再次向web服务器请求时带上头If-Modified-Since，表示请求时间。
web服务器收到请求后发现有头If-Modified-Since 则与被请求资源的最后修改时间进行比对。

若最后修改时间较新，说明资源又被改动过，则响应整片资源内容（写在响应消息包体内），响应HTTP 200；
若最后修改时间较旧，说明资源无新修改，则响应HTTP 304，告知浏览器继续使用所保存的cache。

 

#### Etag/If-None-Match

也要配合Cache-Control使用。

Etag：web服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。Apache中，ETag的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行Hash后得到的。

If-None-Match：当资源过期时（使用Cache-Control标识的max-age），发现资源具有Etage声明，则再次向web服务器请求时带上头If-None-Match （Etag的值）。web服务器收到请求后发现有头If-None-Match 则与被请求资源的相应校验串进行比对，决定返回200或304。

 

#### 既生Last-Modified何生Etag？

你可能会觉得使用Last-Modified已经足以让浏览器知道本地的缓存副本是否足够新，为什么还需要Etag（实体标识）呢？HTTP1.1中Etag的出现主要是为了解决几个Last-Modified比较难解决的问题：

Last-Modified标注的最后修改只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间

如果某些文件会被定期生成，当有时内容并没有任何变化，但Last-Modified却改变了，导致文件没法使用缓存

有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形

Etag是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符，能够更加准确的控制缓存。Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。




## 实际页面解析http缓存逻辑

+ 缓存是不是可以被缓存
    - cache-control
    - Pragma
+ 缓存过期策略
    - 仅仅使用 `cache-control` 控制， max-age控制相对时间，expire控制绝对时间（优先级别比较低）
    - `Last-Modified/If-Modified-Since` 配合控制
    - `Etag/If-None-Match` 配使用


请求一个 style.css文件的过程分析

第一次请求数据：
```js
// General
Request URL: http://stakecode.com/stylesheets/style.css
Request Method: GET
Status Code: 200 OK
Remote Address: 52.203.102.189:80
Referrer Policy: no-referrer-when-downgrade

// Response Headers
HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sun, 18 Nov 2018 15:48:37 GMT
Etag: W/"137-16727826808"
Content-Type: text/css; charset=UTF-8
Content-Length: 311
Date: Tue, 12 Mar 2019 08:04:48 GMT
Via: 1.1 vegu

// Request Headers
Accept: text/css;q=0.1
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6
Cache-Control: no-cache
Connection: keep-alive
Host: stakecode.com
Pragma: no-cache
Referer: http://stakecode.com/
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3730.0 Safari/537.36

```

第一天请求以后，服务端常见的返回信息：

+ 是不是可以让客户端缓存，`cache-control`
+ 可以缓存，缓存的时间
+ 文件最后一次修改时间，`last-modified`
+ 文件的Etag标记


再一次请求 style.css

```js
// General
Request URL: http://stakecode.com/stylesheets/style.css
Request Method: GET
Status Code: 304 Not Modified
Remote Address: 52.203.102.189:80
Referrer Policy: no-referrer-when-downgrade

// Response Headers
HTTP/1.1 304 Not Modified
Server: Cowboy
Content-Length: 0
Connection: keep-alive
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sun, 18 Nov 2018 15:48:37 GMT
Etag: W/"137-16727826808"
Date: Tue, 12 Mar 2019 08:39:09 GMT
Via: 1.1 vegur

// Request Headers
GET /stylesheets/style.css HTTP/1.1
Host: stakecode.com
Connection: keep-alive
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3730.0 Safari/537.36
Accept: text/css,;q=0.1
Referer: http://stakecode.com/
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6
If-None-Match: W/"137-16727826808"
If-Modified-Since: Sun, 18 Nov 2018 15:48:37 GMT

```

再一次请求的时候比较策略：

+ cache-control: public 可以读取缓存
+ 通过 `If-None-Match` 比较Etag，没有变
+ 通过 `If-Modified-Since`, 服务器比较 `Last-Modified` 在这段时间没有改变文档，读取缓存

综上返回 304

### 总结

```
graph TB
HTTP --> Cache-Control
HTTP --> Expires
HTTP --> Last-Modified
Cache-Control --> Public:可以被任何缓存所缓存
Cache-Control --> Private:内容只缓存到私有缓存中
Cache-Control --> no-cache:所有内容都不会被缓存

```
