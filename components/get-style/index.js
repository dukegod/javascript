/**
 * [getStyle description]
 * @param  {[type]} ele    [输入的类名]
 * @param  {[type]} pseudo [伪类名字,::after,::befor; 可以传入null,忽略伪类类型]
 * @param  {[type]} e      [获取伪类的类名]
 * @return {[type]}        [输出伪类属性值]
 */
function getStyle(ele, pseudo, e) {
  var ps = pseudo || null
  var style = null;
  // 判断浏览器是不是支持
  if (window.getComputedStyle) {
    style = window.getComputedStyle(ele, ps).getPropertyValue(e);
  } else {
    style = ele.currentStyle.getPropertyCSSValue(e);
  }
  return style;
}

