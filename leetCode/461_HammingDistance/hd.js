/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 先转为二进制单位
  var binX = x.toString(2).split('');
  var binY = y.toString(2).split('');
  var lenX = binX.length;
  var lenY = binY.length;
  var hd;

  // 判断数组的长度
  if (lenX - lenY === 0) {
    compareArray(binX, binY);
  }

  if (lenX - lenY > 0) {
    for (var i = 0; i < lenX - lenY; i++) {
      binY.unshift('0')
    }
    compareArray(binX, binY);
  }

  if (lenY - lenX > 0) {
    for (var i = 0; i < lenY - lenX; i++) {
      binX.unshift('0')
    }
    compareArray(binX, binY);
  }

  function compareArray(arr1, arr2) {
    // 记录汉明距离
    hd= 0;
    for(var i=0; i< arr1.length; i++){
      if( parseInt(arr1[i],10) !== parseInt(arr2[i], 10)){
        ++hd;
      }
    }
  }

  return hd;
};

var t = hammingDistance(1, 4);
console.log(t);
