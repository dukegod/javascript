// istype.js
// 万能的"数据类型"判断函数
// 引用类型：
// 1 基本数据类型：Null/Undefined/String/Number/Boolean
// 2 引用类型：Object/Array/Date/Function/RegExp
// 3 单体内置对象：Global(浏览器环境的话就是window对象)/Math

function typeOf(arg){
  'use strict';
  console.log(Object.prototype.toString.call(arg));
  return Object.prototype.toString.call(arg).match(/\[object\s(\w+)]/)[1];
}

var i = 99;

var _null = null;

var ff = function(){};

var obj = {};

var arr = [];

console.log(typeOf(arr));

//console.log(typeOf(ff));


