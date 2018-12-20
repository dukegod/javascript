/**
 * Created by hui on 16/4/7.
 */
Function.prototype.callWheel = function (context) {
  // 缓存this对象，调用的对象
  let ct = !!context ?  context : global;
  const self = this || global;
  ct.fn = self;
  ct.fn(...arguments);
  delete fu;
}


function a(){
    console.log(this); //输出函数a中的this对象
}
function b(){} //定义函数b

var obj = {name:'onepixel'}; //定义对象obj

a.call(); //window 。node环境为“global”
a.call(null); //window，node环境为“global”
a.call(undefined);//window，node环境为“global”
a.call(1); //Number
a.call(''); //String
a.call(true); //Boolean
a.call(b);// function b(){}
a.call(obj); //Object { name: 'onepixel' }


a.callWheel(); //window 。node环境为“global”
a.callWheel(null); //window，node环境为“global”
a.callWheel(undefined);//window，node环境为“global”
a.callWheel(1); //Number
a.callWheel(''); //String
a.callWheel(true); //Boolean
a.callWheel(b);// function b(){}
a.callWheel(obj); //Object { name: 'onepixel' }
