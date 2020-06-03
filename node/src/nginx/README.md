node 遇到nginx 带来一种新的web开发体验   
先对nginx一些概念进行说明下, [更多的基础东西参考](http://blog.stakecode.com/2016/12/22/2016-12-22-Nginx/)

## 正向与反向代理

正向代理服务器用来让局域网客户机接入外网以访问外网资源     
反向代理服务器用来让外网的客户端接入局域网中的站点以访问站点中的资源。

### 正向代理的服务器配置

+ resolver : 指定DNS服务器的IP地址
+ resolver_timeout: 设置DNS服务器域名解析超时时间
+ proxy_pass: 代理服务器协议和地址

### 反向代理服务器配置

反向代理的相关的指令太多了就不一一详述，其中最重要就是**负载均衡**配置。  
**负载均衡** 大致原理利用一定的分配策略将网络负载均衡平衡的分摊到网络集群的各个操作单元，使的单个重负载任务能够分担到多个单元上并行处理，或者使得大量的并发访问或数据流量分担到多个单元上分别处理，从而减少用户的等待响应时间。   
nginx实现静态的基于优先级的加权轮询算法，主要使用的配置是proxy_pass指令和upsteam指令。

### Nginx的负载均衡方案

#### 轮询

轮询即Round Robin，根据Nginx配置文件中的顺序，依次把客户端的Web请求分发到不同的后端服务器。
**实现服务器的减压，让多个服务器为我们的请求分发处理，这些服务器做的工作都是一样的**     

配置的例子如下：    

```
http{
    upstream sampleapp {
        server <<dns entry or IP Address(optional with port)>>;
        server <<another dns entry or IP Address(optional with port)>>;
    }
    ....
    server{
       listen 80;
       ...
       location / {
          proxy_pass http://sampleapp;
       }
    }
```

上面只有1个DNS入口被插入到upstream节，即sampleapp，同样也在后面的proxy_pass节重新提到。

#### 最少连接

Web请求会被转发到连接数最少的服务器上。   
配置的例子如下：

```
http{
    upstream sampleapp {
        least_conn;
        server <<dns entry or IP Address(optional with port)>>;
        server <<another dns entry or IP Address(optional with port)>>;
    }
    ....
    server{
       listen 80;
       ...
       location / {
          proxy_pass http://sampleapp;
       }
    }
上面的例子只是在upstream节添加了least_conn配置。其它的配置同轮询配置。

```
#### IP地址哈希

前述的两种负载均衡方案中，同一客户端连续的Web请求可能会被分发到不同的后端服务器进行处理，因此如果涉及到会话Session，那么会话会比较复杂。常见的是基于数据库的会话持久化。要克服上面的难题，可以使用基于IP地址哈希的负载均衡方案。这样的话，同一客户端连续的Web请求都会被分发到同一服务器进行处理。

```
http{
    upstream sampleapp {
        ip_hash;
        server <<dns entry or IP Address(optional with port)>>;
        server <<another dns entry or IP Address(optional with port)>>;
    }
    ....
    server{
       listen 80;
       ...
       location / {
          proxy_pass http://sampleapp;
       }
    }
 ```

上面的例子只是在upstream节添加了ip_hash配置。其它的配置同轮询配置。


#### 基于权重的负载均衡

基于权重的负载均衡即Weighted Load Balancing，这种方式下，我们可以配置Nginx把请求更多地分发到高配置的后端服务器上，把相对较少的请求分发到低配服务器。

```
http{
    upstream sampleapp {
        server <<dns entry or IP Address(optional with port)>> weight=2;
        server <<another dns entry or IP Address(optional with port)>>;
    }
    ....
    server{
       listen 80;
       ...
       location / {
          proxy_pass http://sampleapp;
       }
  }
```

上面的例子在服务器地址和端口后weight=2的配置，这意味着，每接收到3个请求，前2个请求会被分发到第一个服务器，第3个请求会分发到第二个服务器，其它的配置同轮询配置。
还要说明一点，基于权重的负载均衡和基于IP地址哈希的负载均衡可以组合在一起使用。

#### 对特定资源实现负载均衡

可以对视频，文件资源使用

```
upstream videoback {
    server 192.168.1.1;
    server 192.168.1.2;
}
upstream fileback {
    server 192.168.1.3;
    server 192.168.1.4;
}

server {
    listen 8080;
    server_name www.stackcode.com;

    location /video/ {
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Connection "";
        proxy_http_version 1.1;
        proxy_pass http://samvideobackple;
    }
    location /files/ {
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Connection "";
        proxy_http_version 1.1;
        proxy_pass http://fileback;
    }    
}
```

#### 配置不同域名实现负载均衡

分别接受不同的域名请求和对这些请求进行负载均衡.    
配置的接口不一样

```
upstream bbsbackend {
    server 192.168.1.1;
    server 192.168.1.2;
}
upstream homebackend {
    server 192.168.1.3;
    server 192.168.1.4;
}

# 配置server1
server {
    listen 8080;
    server_name home.myweb.com;
    index index.html

    location / {
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Connection "";
        proxy_http_version 1.1;
        proxy_pass http://homebackend;
    }   
}
# 配置server2
server {
    listen 8081;
    server_name bbs.myweb.com;

    location / {
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Connection "";
        proxy_http_version 1.1;
        proxy_pass http://bbsbackend;
    }  
}
```

#### 对URL重写

有的时候我们需要访问一个文件下的资源，文件目录比较深点，我们可以通过对其重写，对外抛出一个比较清晰的文件目录。

```
rewrite
```

## NodeJS应用相关的开发配置

主要针对前端本地调试开发，稍加一点服务端配置。

### node中间件实现代理

node环境下，我们做代理的方法，当然我们可以使用中间件实现代理，具体参考这个[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)；这里不做讨论。

### 用Nginx玩NodeJS应用

+ 基本代理
+ 域名代理解决跨域问题
+ 负载均衡浅谈

#### 基本代理

不需要修改host，实现通过nginx的访问，本地通过node，java或者PHP的服务。node为例子

```
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  127.0.0.1;

        location / {
            proxy_pass   http://127.0.0.1:3000;  
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```
说明点：
+ `http://127.0.0.1:3000` 是我通过node起的服务
+ 启动我们的Nginx服务器，配置如上
+ 在浏览器中输入：`http://127.0.0.1/` 访问，这个时候就请求到 `http://127.0.0.1:3000` 这个代理服务器上的内容了

#### 代理具体域名

主要说明前后端开发中实现跨域请求的方法

```
http {
    include       mime.types;
    default_type  application/octet-stream;
    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  home.com;
        # 一个需要代理的服务
        location / {
            proxy_pass   http://127.0.0.1:3000;  
            root   html;
            index  index.html index.htm;
        }
        # 需要代理的服务
        location /api {
            proxy_pass   http://backen.com/api;  
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

说明点：
+ `http://127.0.0.1:3000/`  是我通过node起的服务, `http://backen.com/` 是后端接口服务器
+ 配置host修改为如下,跨过DNS解析，**host只能配置80端口，不能实现不同的端口**。
```
127.0.0.1 home.com
```
+ 启动我们的Nginx服务器，配置如上
+ 在浏览器中输入：`http://home.com/`，这个时候就请求到 `http://127.0.0.1:3000/` 这个代理服务器上的内容了
+ 在浏览器中输入：`http://home.com/api`，这个时候就请求到 `http://backen.com/api/` 这个代理服务器上的内容了

#### 负载均衡

1. 配置Nginx

修改nginx.conf：

```
upstream sample {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Connection "";
        proxy_http_version 1.1;
        proxy_pass http://sample;
    }
}
```

这里在3000端口和3001端口各有一个Node.js服务器，这两个服务器在做同样的工作。   
在upstream节，配置了两个Node.js服务器。此外，我们还设置了proxy_pass `http://sample` 做HTTP请求代理。

2. 构建NodeJS服务器

```
var http = require('http');
var morgan = require('morgan');

var server1 = http.createServer(function (req, res) {
  console.log("Request for: " + req.url + "-- port 3000 ");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(3000, "127.0.0.1");

var server2 = http.createServer(function (req, res) {
  console.log("Request for: " + req.url + "-- port 3001 ");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(3001, "127.0.0.1");

server1.once('listening', function() {
  console.log('Server running at http://127.0.0.1:3000/');
});

server2.once('listening', function() {
  console.log('Server running at http://127.0.0.1:3001/');
});

```

3. 访问Nginx服务器

现在我们可以访问http://127.0.0.1:80

```
//可以看到如下的输出：
  Server running at http://127.0.0.1:3000/
  Server running at http://127.0.0.1:3001/
  Request for:  /-- port 3001
  Request for:  /favicon.ico-- port 3000
  Request for:  /favicon.ico-- port 3001
  Request for:  /-- port 3000
  Request for:  /favicon.ico-- port 3001
  Request for:  /favicon.ico-- port 3000
  Request for:  /-- port 3001
  Request for:  /favicon.ico-- port 3000
  Request for:  /favicon.ico-- port 3001
  Request for:  /-- port 3000
  Request for:  /favicon.ico-- port 3001
  Request for:  /favicon.ico-- port 3000

```

#### 参考


  [参考](http://blog.chinaunix.net/xmlrpc.php?r=blog/article&uid=90618&id=4836655)
