# javascript

### 打包
`build`文件夹中配置`rollup.config.js`
+ cmd： 'cjs'
+ umd:  'umd'

### babel@7

`@bable/node`代替之前的`babel-cli`
+ -p ： 执行指定的文件

运行以下命令 + 指定的文件
```js
npm run babel ./a.js
```

babel@7 带来的新特征：

+ babel包都添加`@`前缀
+ 去除复杂的`presets`

### mocha

断言库： `chai`

运行以下命令 + 指定的文件

```js
npm run mocha 1.test.js
```



