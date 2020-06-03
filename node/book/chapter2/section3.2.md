# 包管理工具

+ npm
+ yarn

## 常见开发命令

#### save 与 save-dev 区别

+ --save-dev： 是你开发时候依赖的东西(如各种打包，压缩，编译，转译babel工具)     
+ --save： 是你发布之后还依赖的东西(如：vue，react，jquery等在线上还是会用的)


#### 搜素，安装，查看包信息

```
// 搜索包
npm search pkg

// 全局安装pkg
npm install -g <package_name>

// 本地安装，安装package时自动加入dependencies依赖列表
npm install <package_name> --save

// 本地安装，安装package时自动加入devDependencies依赖列表
npm install <package_name> --save-dev  //加入到devDependencies

// 查看包信息
npm info pkg

```

#### 查看本地所有的安装包

```
// 列出各种包
npm ls
// 列出全局安装的各种包
npm ls -g
// 列出全局安装的各种包树节点包
npm ls --depth = 1 2>/dev/null
// 可以去定点去查找具体的包
npm ls --depth = 1 2>/dev/null | grep generator
// 仅仅列举最外层的模块
npm list --depth=0 2>/dev/null

```

#### 查看本地过期包

```
// 查看过期的包
npm -g outdated
```


#### 更新包

最好在每次去安装模块的时候，先升级你的npm

```
npm update -g npm

// 更新包
npm update pkg

// 更新全部包
npm -g update

```

#### 卸载包

```
// 本地删除

npm uninstall <package_name>

//删除包,但不会清理package.json中的依赖项,下次npm ls时会报错缺少包

npm uninstall --save <package_name> 这样连依赖一起删掉

//如果只删除了依赖,没有删除包,下次npm ls时会报多了包

//这时应该用npm prune把包也删除掉

//全局删除

npm uninstall -g <package_name>

```

#### npm 在本地的安装路径

```

which node

```

### 常见开发命令的技巧


常规 | 技巧篇
--- | ---
npm install pkg | npm i pkg
npm install --global pkg | npm i -g pkg
npm i --save pkg | npm i -S pkg
npm i --save-dev pkg | npm i -D pkg


## 国内优秀npm镜像推荐及使用

#### cnpm 镜像加速

1.临时使用

```
npm --registry https://registry.npm.taobao.org install express

```

2.持久使用

```
npm config set registry https://registry.npm.taobao.org

// 配置后可通过下面方式来验证是否成功
npm config get registry
// 或
npm info express

```

3.通过cnpm使用

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

// 使用
cnpm install express

```

## npm 发布包

#### 注册一个账户

```
npm addusers
Username: YOUR_USER_NAME
Password: YOUR_PASSWORD
Email: YOUR_EMAIL@domain.com
```
I> 注意点: 在Username，password 等每一行后面没有空格否则会报出 "npm WARN Username may not contain non-url-safe chars"

#### npm 发布

先登录npm账户

```
npm login
Username: YOUR_USER_NAME
Password: YOUR_PASSWORD
Email: YOUR_EMAIL@domain.com
npm publish
```

然后你可以在这个网站上 ’https://www.npmjs.com‘去查看自己发布的包文件

#### 删除线上的包

```
npm unpublish generator-lh-test@0.0.0
```

### error may occur

```
you do not have permission to publish "gulp-es6-sass". Are you logged in as the correct user? : gulp-es6-sass

```
这个名字已经被占用了


