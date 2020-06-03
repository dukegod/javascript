# Redis

Redis 解压数据库的频繁操作，redis的存储方式是键值对的方式，只能存储字符串。

我们只是使用redis搭建一个缓存的功能。

安装直接通过homebrew安装就可以。

```
brew services start redis

redis-server

// 查看进程
ps aux | grep redis

//通过redis-cli命令可以启动redis客户端

redis-cli
```

常用命令:

+ keys * 查看所有键值
+ set (key) (value) 设置键key的值为value
+ append (key) (value2) 在键key的值后面加上value2
+ get (key) 查看键key的值

#### 原理

项目中我们可以先访问redis服务器去查找我们所需要的key-value,没有结果然后去相关的数据库中查看。

第一次访问数据库，把查询的结果保存到redis中，方便下一次使用。

node中使用[redis](https://github.com/NodeRedis/node_redis)

```
npm install redis
```

进行相关的操作，这里暂不做复杂的项目配置，实际项目中需要配合数据进行相关的操作。
