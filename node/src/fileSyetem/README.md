# fs 文件操作系统

+ fs.stat
+ fs


## 文件删除

```
fs.unlink()
```

推荐异步删除一个文件,避免因为自己已经修改了文件名字带来的问题

### 文件读取大小

+ 小文件: fs.readFile
+ 大文件: fs.createReadStream

fs.readFile 的缺点是会先将数据全部读入内存，一旦遇到大文件的时候，这种方式读取的效率就非常低下了。

fs.createReadStream 则是通过 Stream 来读取数据，它会把文件（数据）分割成小块，然后触发一些特定的事件，我们可以监听这些事件，编写特定的处理函数。

