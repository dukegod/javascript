# javascript

不断的造轮子，解析轮子，摧毁轮子，然后继续造轮子...

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

### 目录说明
+ components: 主要存放各种前端自造小轮子

```js
    // mocha test
  npm run mocha  ./components/**.test.js
```
+ LeetCode: leetcode 题解
+ algorithms: 算法解析
+ js-patterns: 设计模式实现
+ key-kits: js相关的知识点



