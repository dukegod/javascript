
function strToJson(params) {
  if (params === '') return;
  var strs = params.replace(/=/g, ':');
  var res = {};
  for (var i = 0; i < strs.split(',').length; i++) {
    var x = strs.split(',')[i].split(':');
    res[x[0]] = x[1];
  }
  return JSON.stringify(res);
}

export default strToJson
