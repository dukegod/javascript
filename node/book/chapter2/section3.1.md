# node管理工具

## 如果删除本地默认安装的node程序

在使用各种node管理工具的时候，可以试着把自己本地默认安装的node删除，然后根据不同的版本去安装不同的包文件。

```
#查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装
npm ls -g --depth=0
#删除全局 node_modules 目录
sudo rm -rf /usr/local/lib/node_modules
#删除 node
sudo rm /usr/local/bin/node
#删除全局 node 模块注册的软链
cd  /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm
```

## node常用的管理工具

### n

可以用tj大牛的n去管理node各个版本。

具体查看[github n](https://github.com/tj/n)

### brew install node 版本

也可以用brew 安装不同的弄得版本，自己手动配置node路径去使用不同的版本

```
brew install **

# node 环境变量修改

export PATH=/usr/local/Cellar/node/6.1.0/bin:$PATH

```

### 用nvm 管理node版本

这个是我主要介绍的，用n管理不好控制npm版本，直接安装总是需要手动修改环境变量。

[nvm github地址](https://github.com/creationix/nvm)，你可以通过这个地址，更多的了解nvm

推荐通过brew安装nvm

```
brew install nvm

// 创建一个目录
mkdir  ~/.nvm

// 当前用的node版本
nvm use v6.0.0

// 设置全局的node版本

nvm alias defaule system/v6.3.1

// 在bash_prifile中添加路径

#nvm
export NVM_DIR="$HOME/.nvm"
  . "$(brew --prefix nvm)/nvm.sh"

```

#### nvm

npm 不建议不同的版本使用一套全局的npm modules

```
#同步安装包

nvm install node --reinstall-packages-from=v8.10.0
```

