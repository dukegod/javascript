/**
 * Created by hui on 16/4/7.
 */
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