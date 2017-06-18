# regular Expression

## 创建一个正则表达式

字面量创建

```
var re = /abc/;
```

调用RegExp对象的构造函数创建

```
var re = new RegExp('abc');
```

## 正则表达式的执行

exec	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。

test	一个在字符串中测试是否匹配的RegExp方法，它返回true或false。

match	一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。

search	一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。

replace	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。

split	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。

## 特殊字符

^ $ . * + ? = | \ ( ) [ ] { }

以上字符用的时候都需要前缀 \

## 字符类

将单独字面量字符放进方括号内就可以组合成**字符类**

在数组中的字符将会被匹配

```
var re = /[abc]/;
var bb = re.exec('abbbdcccc');
console.log(bb);
```

常用的字符类总结:

字符 | 匹配
--- | ---
[...] | 位于括号以内的任意字符
[^...] | 不在括号内的任意字符
.	| 除了换行符和其他的unicode行终止符以外的任意字符
\w | 任何ASCII,等价于 [a-zA-Z0-9]
\W | 任何ASCII非单字字符,等价于 [^a-zA-Z0-9]
\s | 匹配一个空白字符，包括空格、制表符、换页符和换行符。
\S | 匹配一个非空白字符
\d | 匹配一个数字。等价于[0-9]。 
\D | 匹配一个非数字字符。等价于[^0-9]。
[\b] | 匹配一个退格(U+0008)。（不要和\b混淆了）

## 重复


字符 | 匹配
--- | ---
{n,m} | 匹配前一项至少n次,但不能超过m次
{n} | 匹配正好n个次
{n,} | 至少匹配n次
+ | 至少一次
* | 匹配所有
? | 匹配一个或者0 (有疑问)

## 非贪婪重复

只需要在重复的字符后面加个'?'即可

## 选择 分组  引用

| 

(...)

(?:...)

\n

#### 括号()的用处

+ 当做子单元
+ 在完整的模式下定义子模式
+ 作为引用表达式











