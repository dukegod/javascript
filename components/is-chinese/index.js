/**
 * 是不是存在汉字
 * @param {s} str
 */
function fontTrans(str) {
  var len = str.length
  for (var i = 0; i < len; i++) {
    var txt = str.charCodeAt(i);
    if (txt > 128) {
      //ascii码大于128的是汉字
      return true;
    }
    return false;
  }
}

export {
  fontTrans
}


console.log(fontTrans('999'));       // false
console.log(fontTrans('中文字'));     // true
console.log(fontTrans('中文字aa'));   // true
