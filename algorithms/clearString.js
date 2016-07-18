// cleatString.js
// 去除脚本中的特殊字符，对字符串进行过滤是在数据前后台交互中必备的
function clearString(s){ 
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;|{}【】‘；：”“'。，、？]") 
    var rs = ''; 
    for (var i = 0; i < s.length; i++) { 
        rs = rs + s.substr(i, 1).replace(pattern,''); 
    } 
    return rs;
} 

var str = '<33>ddd!++++ddd';
console.log(clearString(str));

