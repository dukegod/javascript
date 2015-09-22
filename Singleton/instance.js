//instance.js

// 整个运行期间只会被初始化一次，即只有一个对象。该模式简单易懂，运用也很广泛。可以用它来聚合公共的方法，形成一个工具类，对外提供api。

/* model 

var Singleton = (function(){

  //private Instance 
  var _instance = null;

  //private constructor
  var _Constructor = function(){
      console.log("JavaScript Singleton");
  }

  //public getInstance
  return {
    getInstance : function(){
      if(_instance==null){
        _instance = new _Constructor();
      }
      return _instance;
  	}
  }
}());

*/

// 运用构造方法，实现继承

var Singleton = (function(){
	
	var _instance = null;

	var Person = function(name,age,nation){
		console.log('person is not a one');
		this.name = name;
		this.age = age;
		this.nation = nation;
	}

	Person.prototype = {

		init: function(){
			console.log(this.name+':age:'+this.age+' nation '+this.nation);
		},
		getName: function(name){
			console.log(this.name);
		},
		setName: function(name){
			this.name = name;
		}
	}

	return {
		getIns: function(){
			if(_instance == null){
				_instance = new Person('duke',18,'china');
			}
			return _instance;
		}
	}
}());
// Singleton.getIns().setName('ddd');
// Singleton.getIns().getName();
Singleton.getIns().init();

