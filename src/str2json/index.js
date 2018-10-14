var str = "a=90,b=80,c=99";

function strToJson(params) {
  // if (!!params)  return;
  if (params === '') return;
  var strs = params.replace(/=/g, ':').replace("{", '').replace("}", '');
  var res = {};
  for (var i = 0; i < strs.split(',').length; i++) {
    var x = strs.split(',')[i].split(':');
    res[x[0]] = x[1];
  }
  return JSON.stringify(res);
}

console.log(strToJson(str));
