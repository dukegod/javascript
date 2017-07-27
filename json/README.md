# JSON 

## 注意点

+ 必须使用双引号
+ 没有函数声明
+ 没有末尾分号

### json字符串格式 

```js
{
    "id": 6,
    "name": "brand",
    "info": "brand brand brand brand",
    "age": 1
}
```

### json数组

```json
[
    {
        "id": 1,
        "name": "aaa",
        "info": "aaa first item",
        "age": 1
    },
    {
        "id": 6,
        "name": "brand",
        "info": "brand brand brand brand",
        "age": 1
    }
]
```

### 这是JavaScript对象

```js
var peprson = {
    "id": 6,
    "name": "brand",
    "info": "brand brand brand brand",
    "age": 1
}

```

## json 方法


## json.stringify()

把JavaScript对象序列化json字符串

JSON.stringify(a,b,c)接受3个参数;

+ a:js对象
+ b:是一个过滤器(可以一个数组,也可以是一个函数)
+ c: 是否缩进

## json.parse()

json字符串转化为js对象

也可以接受两个参数,key,value


