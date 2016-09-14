var str = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

console.log(str.slice(-2,-1));

console.log(str.slice(1,2));

var str2 = {'1','2','3','4','5'};
var str22 = Array.prototype.splice.call(str2);
var str33 = JSON.parse(str2);


function str2json(str){
  var strs = str.replace(/=/g, ':').replace("{", '').replace("}", '');
  var res = {};
  for (var i = 0; i < strs.split(',').length; i++) {
    var x = strs.split(',')[i].split(':');
    res[x[0]] = x[1];
  }
  return JSON.stringify(res);

}

console.log(str2json(str2))