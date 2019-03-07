// cleatString.js
// 去除脚本中的特殊字符，对字符串进行过滤是在数据前后台交互中必备的
function clearString(s) {
  const pattern =
    new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;|{}【】‘；：”“'。，、？]");
  let rs = '';
  for (let i = 0; i < s.length; i++) {
    rs += s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

export default clearString;
