# 内存分配与堆栈队列


讨论常见的数据结构一些概念：

+ 队列： 先进先出
+ 栈(stack)： 先进后出；
  操作系统在建立某个进程时或者线程（在支持多线程的操作系统中是线程）为这个线程建立的存储区域，该区域具有FIFO的特性，在编译的时候可以指定需要的Stack的大小
+ 堆(Heap): 是应用程序在运行的时候请求操作系统分配给自己内存，一般是申请/给予的过程
  **由于从操作系统管理的内存分配所以在分配和销毁时都要占用时间，所以用堆的效率低的多！但是堆的好处是可以做的很大**

JavaScript的两种数据类型：
+ 基本数据类型： Undefined,Null,Number,String,Boolean都是**存在栈中的**
+ 引用数据类型: Object,Function,Array,以及自定义对象,等等都是**存在堆中的，**。也就是说，存储在变量处的值(即指向对象的变量，存储在栈中）是一个指针，指向存储在堆中的实际对象.

实例分析原因：
```js
function Person(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

var num = 10;
var bol = true;
var str = "abc";
var obj = new Object();
var arr = ['a', 'b', 'c'];
var person = new Person(100, "jxl", 25);
```
呈现出的分析图

![image](https://pic002.cnblogs.com/images/2010/138960/2010100718003596.png)

变量num,bol,str为基本数据类型，它们的值，直接存放在栈中，obj,person,arr为复合数据类型，他们的引用变量存储在栈中，指向于存储在堆中的实际对象。
由上图可知，我们无法直接操纵堆中的数据，也就是说我们无法直接操纵对象，但我们可以通过栈中对对象的引用来操作对象

#### 堆与栈分配的原则:

**堆比栈大，栈比堆的运算速度快**,对象是一个复杂的结构，并且可以自由扩展，如：数组可以无限扩充，对象可以自由添加属性。将他们放在堆中是为了不影响栈的效率。而是通过引用的方式查找到堆中的实际对象再进行操作。相对于简单数据类型而言，简单数据类型就比较稳定，并且它只占据很小的内存。不将简单数据类型放在堆是因为通过引用到堆中查找实际对象是要花费时间的，而这个综合成本远大于直接从栈中取得实际值的成本。所以简单数据类型的值直接存放在栈中。

#### 栈与堆区别

栈区（stack：  由编译器自动分配释放，存放函数的参数值，局部变量的值等。
堆区（heap：   一般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收。
堆（数据结构）：堆可以被看成是一棵树，如：堆排序；
栈（数据结构）：一种先进后出的数据结构。

##### 参考
[js_01_内存分配.md](http://www.cnblogs.com/fool/archive/2010/10/07/1845226.html)

[理解Javascript_01_理解内存分配](http://www.cnblogs.com/fool/archive/2010/10/07/1845226.html)