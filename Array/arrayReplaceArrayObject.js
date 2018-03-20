/**
 * [根据指定的数组内容，找到另一个数组的指定的内容，添加字段]
 * @return {[type]} [description]
 */
function arrayReplaceArrayObject(arrA, arrB) {
  console.log(arrB)
  const arrayA = arrA;
  const arrayB = arrB;
  let arrayC;
  for (let i = 0; i < arrayB.length; i++) {
    let eleB = arrayB[i];
    for (let j = 0; j < arrayA.length; j++) {
      let eleA = arrayA[j];
      if (eleB == eleA.bpin) {
        eleA.selected = true
      }
    }
  }
  arrayC = arrayA;
  return arrayC
}