## 参考：
	http://www.w3cschool.cc/w3cnote/javascript-guide.html
	http://greengerong.github.io/blog/2015/05/09/qian-duan-javascriptgui-fan


## 文件组织：

* 所有的javascript文件都要放在项目公共的'''script'''文件夹下；

* 使用的第三方库文件放置在'''script/lib'''文件夹下；

* 可以复用的自定义模块放置在'''script/commons'''夹下,复用模块如果涉及多个子文件，需要单独建立模块文件夹；

* 单独页面模块使用的javascript文件放置在'''script/{module_name}'''文件夹下；

* 项目模拟的json数据放置在'''script/json'''文件夹下，按照页面单独建立子文件夹；

* javascript应用MVC框架时，使用的模板文件放置在'''script/templates'''文件夹下，按照页面单独建立子文件夹



## 格式化：

*  始终使用var定义变量，防止变量的污染
  var global = '';
  function method() {
      var local = '';
  }
*  始终使用分号结束一行声明语句；

* 对于数组和对象不要使用多余的","（兼容IE）；

* 定义顶级命名空间如inBike,在顶级命名空间下自定义私有命名空间，根据模块分级；

* 所有的模块代码放在匿名自调用函数中，通过给window对象下的自定义命名空间赋值暴露出来
	if (!window.inBike) {
	    window.inBike = {};
	}
	window.inBike.rideway = rideway;

*  绑定事件代码需要放置在dom ready函数中执行
	$(function() {
	     //bind function is in the init function
	     window.inBike.rideway.init();
	})

*  将自定义模块方法放置在对象中，方法名紧挨":"，":"与function之间空一格，function()与后面的"{"之间空一格
	var module = function() {
	    method: function() {

	    }
	};

* 使用单引号包裹字符串
	var str = 'some text';

* 所用的变量使用之前需要定义，定义之后立即初始化
	var obj = null;
	var num = 0;
	var arr = [];
	var isEmpty = true;


* 使用浏览器console工具之前先要判断是否支持
	if (console) {
	    console.log('this is my log');
	}




## 命名约定：
	
	避免单个字符名，让你的变量名有描述意义。 
	function query() {
	  // ..stuff..
	}；

	当命名对象、函数和实例时使用驼峰命名规则
    使用驼峰法命名变量和方法名，首字母使用小写,对于类名首字母大写
	var numberList = [1,2];
	var util = {
	    removeNode: function(){
	        ....
	    }
	};

	function Person(name, age) {
	    this.name = name;
	    this.age = age;
	}

	var thisIsMyObject = {};
	function thisIsMyFunction() {};
	var user = new User({
	  name: 'Bob Parr'
	});

    <h5>使用$name命名jquery对象，
    	原生dom元素使用dom开头,
    	对象中私有变量以下划线开头</h5>
	var $image = $('#cover');
	var domImage = document.getElementById('cover');
	var obj = {
	    _privateVar: null,
	    method: function() {

	    }
	};

	<h4>当命名构造函数或类时使用驼峰式大写。</h4>
	function User(options) {
	  this.name = options.name;
	}

	var good = new User({
	  name: 'yup'
	});

	命名私有属性时前面加个下划线 _:
	this._firstName = 'Panda';

	当保存对 this 的引用时使用 self(python 风格),避免this issue.Angular建议使用vm(MVVM模式中view-model):
	// good
	function() {
	  var self = this;
	  return function() {
	    console.log(self);
	  };
	}



## 注释：

  多使用单行注释表明逻辑块的意义

	// Handle the case where IE and Opera return items
	// by name instead of ID
	if ( elem.id !== match[2] ) {
	    return rootjQuery.find( selector );
	}

	// Otherwise, we inject the element directly into the jQuery object
	this.length = 1;
	this[0] = elem;

    指明类的构造方法

	/**
	 * @constructor
	 */
  	some.long.namespace.MyClass = function() {
  	};

    标注枚举常量的类型和意义

	/** @enum {string} */
  	some.long.namespace.Fruit = {
  	  APPLE: 'a',
  	  BANANA: 'b'
  	};

    使用注释标识方法或者变量的可见性，方便静态检查

	/** @protected */
	AA_PublicClass.staticProtectedProp = 31;

	/** @private */
	AA_PublicClass.prototype.privateMethod_ = function() {};


## 最佳实践：

    避免使用eval
    对于对象避免使用with，对于数组避免使用for-in
    谨慎使用闭包，避免循环引用
    警惕this所处的上下文

	var $button = $('#my-button');
	$button.click(function(){
	    var self = this;
	    var util = {
	       getVal: function() {
	           return self.val();
	       }
	    }
	});

    尽量使用短码，比如三目运算符，逻辑开关，自增运算等

	var name = ('undefined' == typeof(name)) ? '' : name;
	(age < 0) && (age = 0);
	count++;

	    不要在块级作用域中使用function

	// 错误
	if (x) {
	  function foo() {}
	}

	// 正确
	if (x) {
	  var foo = function() {}
	}


## 对象：

    使用字面值创建对象。

    // bad
    var item = new Object();

    // good
    var item = {};

    不要使用保留字 reserved words 作为键。

    // bad
    var superman = {
      class: 'superhero',
      default: { clark: 'kent' },
      private: true
    };

    // good
    var superman = {
      klass: 'superhero',
      defaults: { clark: 'kent' },
      hidden: true
    };


## 数组

    使用字面值创建数组。
    // good
    var items = [];

    如果你不知道数组的长度，使用push。
    var someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');

    当你需要拷贝数组时使用slice. jsPerf。

    var len = items.length,
        itemsCopy = [],
        i;

    // bad
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    itemsCopy = items.slice();

    使用slice将类数组的对象转成数组。

    function trigger() {
      var args = [].slice.apply(arguments);
      ...
    }


## 字符串：

    对字符串使用单引号 ''（因为大多时候我们的字符串。特别html会出现"）。  
    var fullName = 'Bob ' + this.lastName; 

    编程时使用join而不是字符串连接来构建字符串。

	var items,
	    messages,
	    length, i;

	messages = [{
	    state: 'success',
	    message: 'This one worked.'
	},{
	    state: 'success',
	    message: 'This one worked as well.'
	},{
	    state: 'error',
	    message: 'This one did not work.'
	}];

	length = messages.length;

	// bad
	function inbox(messages) {
	  items = '<ul>';

	  for (i = 0; i < length; i++) {
	    items += '<li>' + messages[i].message + '</li>';
	  }

	  return items + '</ul>';
	}

	// good
	function inbox(messages) {
	  items = [];

	  for (i = 0; i < length; i++) {
	    items[i] = messages[i].message;
	  }

	  return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
	}


## 存取器:

    属性的存取器函数不是必需的。
    如果你确实有存取器函数的话使用getVal() 和 setVal('hello'),java getter、setter风格或者jQuery风格。
    如果属性是布尔值，使用isVal() 或 hasVal()。
    // good
    if (!dragon.hasAge()) {
      return false;
    }

    可以创建get()和set()函数，但是要保持一致。

    function Jedi(options) {
      options || (options = {});
      var lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    Jedi.prototype.set = function(key, val) {
      this[key] = val;
    };

    Jedi.prototype.get = function(key) {
      return this[key];
    };



## 构造器

    给对象原型分配方法，而不是用一个新的对象覆盖原型，覆盖原型会使继承出现问题。

    function Jedi() {
      console.log('new jedi');
    }

    // bad
    Jedi.prototype = {
      fight: function fight() {
        console.log('fighting');
      },

      block: function block() {
        console.log('blocking');
      }
    };

    // good
    Jedi.prototype.fight = function fight() {
      console.log('fighting');
    };

    Jedi.prototype.block = function block() {
      console.log('blocking');
    };

    <h3>方法可以返回 this 帮助方法可链。</h3>

    // bad
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
    };

    var luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20) // => undefined

    // good
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return this;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
      return this;
    };

    var luke = new Jedi();

    luke.jump()
  		.setHeight(20);

    可以写一个自定义的toString()方法，但是确保它工作正常并且不会有副作用。

    function Jedi(options) {
      options || (options = {});
      this.name = options.name || 'no name';
    }

    Jedi.prototype.getName = function getName() {
      return this.name;
    };

    Jedi.prototype.toString = function toString() {
      return 'Jedi - ' + this.getName();
    };


## 事件

    当给事件附加数据时，传入一个哈希而不是原始值，这可以让后面的贡献者加入更多数据到事件数据里而不用找出并更新那个事件的事件处理器。

    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
      // do something with listingId
    });

    更好：

    // good
    $(this).trigger('listingUpdated', { listingId : listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
      // do something with data.listingId
    });


## 模块

    这个文件应该以驼峰命名，并在同名文件夹下，同时导出的时候名字一致。
    对于公开API库可以考虑加入一个名为noConflict()的方法来设置导出的模块为之前的版本并返回它。
    总是在模块顶部声明 'use strict';，引入[JSHint规范](http://jshint.com/):

    // fancyInput/fancyInput.js

    （function(global) {
      'use strict';

      var previousFancyInput = global.FancyInput;

      function FancyInput(options) {
        this.options = options || {};
      }

      FancyInput.noConflict = function noConflict() {
        global.FancyInput = previousFancyInput;
        return FancyInput;
      };

      global.FancyInput = FancyInput;
    })(this);

## jQuery

    对于jQuery对象以$开头，以和原生DOM节点区分。

    // bad
    var menu = $(".menu");

    // good
    var $menu = $(".menu");

    缓存jQuery查询

    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...stuff...

      $('.sidebar').css({
        'background-color': 'pink'
      });
    }

    // good
    function setSidebar() {
      var $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        'background-color': 'pink'
      });
    }

    对DOM查询使用级联的 $('.sidebar ul') 或 $('.sidebar ul')，jsPerf。
    对有作用域的jQuery对象查询使用 find:

    // bad
    $('.sidebar', 'ul').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good (slower)
    $sidebar.find('ul');

    // good (faster)
    $($sidebar[0]).find('ul');

    每个页面只使用一次document的ready事件，这样便于调试与行为流跟踪。

    $(function(){
       //do your page init.  
    });

    事件利用jQuery.on从页面分离到JavaScript文件。

    // bad
    <a id="myLink" href="#" onclick="myEventHandler();"></a>

    // good
    <a id="myLink" href="#"></a>

    $("#myLink").on("click", myEventHandler);

    对于Ajax使用promise方式。

    // bad
        $.ajax({
            ...
            success : function(){
            },
            error : function(){
            } 
        })

        // good
        $.ajax({.
            ..
        }).then( function( ){
            // success
        }, function( ){
            // error
        })

    利用promise的deferred对象解决延迟注册问题。

    var dtd = $.Deferred(); // 新建一个deferred对象
    　　var wait = function(dtd){
    　　　　var tasks = function(){
    　　　　　　alert("执行完毕！");
    　　　　　　dtd.resolve(); // 改变deferred对象的执行状态
    　　　　};
    　　　　setTimeout(tasks,5000);
    　　　　return dtd;
    　　};

    HTML中Style、以及JavaScript中style移到CSS中class，在HTML、JavaScript中引入class，而不是直接style。

	  


