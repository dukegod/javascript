# 包说明

主要是介绍`package.json`相关的配置与说明

通过 `npm init` 生成

```json

{
    "version":
    "name":
    "decript":
    "author":
    
    # 配置包输出的主路径
    "main": "./lib/index.js",
    
    # 配置npm run 脚本
    "scripts": {
      "start": "webpack-dev-server --hot --inline",
      "dev": "webpack"
    }
    
    #
    "repository": {
      "type": "git",
      "url": "git+https://github.com/gulpjs/gulp.git"
    },
    
    "license": "MIT",
    
    "bin": {
        "start": "./bin/start.js"
    },
    
    
}

```

