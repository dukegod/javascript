/**
 * Created by hui on 16/5/6.
 */
'use strict';

// {n} 匹配个数
console.log(/a{1}/.exec('caass'));
console.log(/a{2}/.exec('caass'));
console.log(/a{3}/.exec('caass'));

//{n,m} 至少匹配n至多匹配m
console.log(/a{1,2}/.exec('caaaaass'));
console.log(/a{1,4}/.exec('caaaaass'));

// ? 匹配一个或者 0 个
console.log(/a?/.exec('ssa'));
console.log(/a?/.exec('abaaa'));


// * 匹配多个
console.log(/bo*/.exec('Aghostboooooed'));

// + 至少一次
console.log(/a+/.exec('saaas'));




