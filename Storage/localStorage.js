'use strict';
  var Storage = (function () {
    //私有的自对象引用
    this._storage = null;

    //私有的构造方法
    var Storage = function () {
      //判断浏览器是否支持本地存储
      if (!window.localStorage) {
        console.log("当前浏览器不支持本地存储!")
      }else{
        console.log('ok')
      }
      this.storage = window.localStorage;
      this.valueArr = null;
    }

    //开放的API调用
    Storage.prototype ={
      get:function (scope) {  //获取scope的值
        var values = JSON.parse(this.storage.getItem(scope));
        return values;
      },
      set:function (scope, value) { //将value存入scope
        if(!this.has(scope)){
          this.valueArr = new Array();
        }else{
          this.valueArr = this.get(scope);
        }
        this.valueArr.unshift(value);
        this.save(scope);
        this.maxNum(scope);
      },
      update: function (scope,key,value){ //更新scope的值
        this.valueArr = this.get(scope);
        this.valueArr[key] = value;
        this.save(scope);
      },
      delete: function(scope,key){ //删除scope的第key个值
        this.valueArr = this.get(scope);
        this.valueArr.splice(key,1);
        this.save(scope);
      },
      save : function (scope) { //保存scope到本地存储器
        this.storage.setItem(scope,JSON.stringify(this.valueArr));
      },
      clear: function () { //清除本地存储器
        if (this.storage)
          this.storage.clear();
      },
      hasRecord : function () { //判断本地存储器是否有记录
        console.log(this)
        if (this.storage.length > 0)
          return true;
        else
          return false;
      },
      has : function (scope) { //判断本地存储器是否有名为scope的记录
        var values = this.get(scope);
        if (values!=null) {
          return true;
        } else {
          return false;
        }
      },
      isEmpty : function(scope){ //判断本地存储器名为scope的记录是否为空
        var values = this.get(scope);
        if(values.length==0){
          return true;
        }else{
          return false;
        }
      },
      maxNum : function(scope){
        var num = 30;
        if (this.valueArr.length > num){
          this.valueArr.pop();
          this.save(scope);
        }
      }
    }

    //暴露的自对象引用获取方法
    return {
      getInstance: function () {
        if (this._storage == null) {
          this._storage = new Storage();
        }
        return this._storage;
      }
    };
  }())
  