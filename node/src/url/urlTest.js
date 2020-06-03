/**
 * Created by hui on 15/12/15.
 */
var url = require('url');
// console.log(url);
var pu = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

console.log(url.format(pu));
console.log(url.format(pu).host);


//  转化为json格式进行输出
console.log(url.parse(pu));
console.log(url.parse(pu).host);

// console.log(global);


