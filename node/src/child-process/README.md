
子进程

管道运算


+ spawn(): 处理shell命令比较多的 
+ fork()
+ exec(): 处理shell命令比较少
+ execFile(): 运行一个文件不通过shell


spawn 可以直接使用shell方式：（类似exec 方法）    

```js
const child = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true
});
```

fork 与  spawn区别

通过fork函数，直接建立了与子进程的通信, fork每生成一个子进程都是全新的V8实例，这需要多耗费时间与内存


我们在主程序上有个比较费时间的需要处理，我们可以让他在子进程中处理，防止阻塞主进程




[https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a](https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a)



process ： 进程   =》thread： 线程