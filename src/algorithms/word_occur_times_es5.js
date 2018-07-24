//
// 判断一个数组中字符出现的次数
//
var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];

function occurTimes(e) {
  if (!e || !(e instanceof(Array))) return;
  var obj = {};
  var getArr = e;
  for (var i = 0, length1 = getArr.length; i < length1; i++) {
    if (obj.hasOwnProperty(getArr[i])) {
      obj[getArr[i]]++
    } else {
      obj[getArr[i]] = 1;
    }
  }
  return obj;
}

var i = occurTimes(arr);
console.log(i)

