/**
 * Created by hui on 16/5/6.
 */
'use strict';


var re = /[abcH]/;
var bb = re.exec('abcHaDDbdcH99999abcH');
console.log(bb);

var bb1 = /\d/.exec('a9');
console.log(bb1);

console.log(/\D/.exec('9i'));

console.log(/\s/.exec('b d')); //匹配空字符

console.log(/\s\D/.exec('b d'));

console.log(/\S/.exec(' dd')); // 匹配非空字符

console.log(/\w/.exec('i9D'));

console.log(/\W/.exec('i9D'));



var ii = ('{[{000}]}').replace(/\]}/, "0");
console.log(ii);




