# 前端地址路由轮子

### 浏览器API

+ hash
+ history api

## hash

#### 获取方法：

```js
window.location.hash
```

#### 特点： 

+ `#`标识，最初用来标识浏览器的位置（锚点）
+ `hash`改变，会增加浏览器的访问记录，但是不会带来页面的变化，即不会触发HTTP请求

#### `onhashchange` 

监听hash地址的改变

```js
window.addEventListener('hashchange', ()=>{}, false)
```

## history

#### 方法： 

+ back
+ go
+ forward
+ pushState
+ replaceState

back, go, forward 只有读取历史记录的权限，触发`popstate`事件，触发HTTP请求

`pushstate`与 `replacestate`事件修改历史记录，不会触发`popstate`时间，不会触发HTTP请求

#### `popstate`

监听地址改变的事件

```js
window.addEventListener('popstate',()=>{}, false)
```

#### `pushstate`与 `replacestate`

接受3个参数：

+ 状态对象
+ title
+ URL

## 单页面路由功能实现

+ push
+ replace
+ refresh
