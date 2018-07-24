# 布尔值操作


##  通过“ !! ” 验证

数值的 0、-0、特殊值的 null、NaN、undefined 以及空字符（""）都会被解释为 false;

### 注意点

```
var aa = "false";

console.log(aa);

console.log(!aa);

console.log(!!aa);

```

在上文中，aa作为string类型不是布尔值，不能通过“！”进行判断。

可以通过如下方式进行判定

```
var aa = "false";

if( aa == "false"){
	
}

```



## 参考

[!!](http://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript)