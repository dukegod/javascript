/**
 *  生成一个数组
 * @param startNumber 数组开始的大小
 * @param length 数组的长度
 * @returns {Array} 返回数组
 */
function generateNewArray(startNumber, length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    var value;
    value = startNumber;
    value += i;
    arr.push(value)
  }
  // console.log(arr);
  return arr;
}
/**
 *
 * @param arr 数组
 * @param length 获取数组中连续内容的长度
 * @return
 */
function consecutiveNumber(arr, length) {
  // console.log(arr);
  var cacheArr = arr;
  var cacheLen = arr.length;
  var consecutiveArr = [];
  // 返回的数字为小于length的整数数值
  var index = Math.floor(Math.random() * (cacheLen - length + 1));
  // console.log(index);
  for (var i = 0; i < length; i++) {
    var value;
    value = cacheArr[index];
    // console.log(i);
    value += i;
    consecutiveArr.push(value);
  }
  // console.log(consecutiveArr);
  return consecutiveArr;
}

/**
 *
 * @param sourceArr 目标数组
 * @param targetArr  比对数组
 * @param length 返回的数组
 */
function oneNumber(sourceArr, targetArr) {
  var sourceArr = sourceArr || [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var targetArr = targetArr || [17, 18, 19];
  //  随机的index
  var innerIndex = sourceArr.indexOf(targetArr[0]);
  // console.log(innerIndex)
  if (innerIndex !== 0 && innerIndex !== sourceArr.length - 3) {
    sourceArr.splice(innerIndex - 1, 5)
  } else if (innerIndex === 0) {
    sourceArr.splice(innerIndex, 4)
  } else {
    sourceArr.splice(innerIndex, 3)
  }
  // console.log(sourceArr)
  var index = Math.floor(Math.random() * sourceArr.length);
  // console.log(sourceArr[index]);
  targetArr.push(sourceArr[index]);
  // console.log(targetArr);
  return targetArr;
}

/**
 *
 * @param sourceArr 目标数组
 * @param length 返回的数组长度
 */
function incontinueNuber(sourceArr, length) {
  var arr = sourceArr;
  var num = length;
  // 新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
  var tempArray = [];
  for (var index in arr) {
    tempArray.push(arr[index]);
  }
  // 取出的数值项,保存在此数组
  var returnArray = [];
  for (var i = 0; i < num; i++) {
    // 判断如果数组还有可以取出的元素,以防下标越界
    if (tempArray.length > 0) {
      // 在数组中产生一个随机索引
      var arrIndex = Math.floor(Math.random() * tempArray.length);
      // 将此随机索引的对应的数组元素值复制出来
      returnArray[i] = tempArray[arrIndex];
      // 然后删掉此索引的数组元素,这时候tempArray变为新的数组
      tempArray.splice(arrIndex, 1);
    } else {
      // 数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
      break;
    }
  }
  return returnArray;
}

//  从5-9中生成连续的随机数目
function generateNumber() {
  var arr = generateNewArray(5, 5);
  console.log(arr);
  var genArr = consecutiveNumber(arr, 3)
  console.log(genArr)
}
generateNumber();

// 从10-19中生成连续的随机数目
function generateNumber2() {
  var arr = generateNewArray(10, 10);
  console.log(arr);
  var genArr = consecutiveNumber(arr, 3)
  console.log(genArr);
  var finalArr = oneNumber(arr, genArr);
  console.log(finalArr);
}
generateNumber2()

function generateNumber3() {
  var arr = generateNewArray(10, 10);
  console.log(arr);
  var finalArr = incontinueNuber(arr, 4);
  console.log(finalArr);
}
generateNumber3()
// 随机排序
function shuffle(arr) {
  var i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
var ss = shuffle([10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
console.log(ss)
