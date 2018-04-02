/**
 * 数据生成
 * @param num
 */
function generateArray(num) {
  let arr = [];
  for(let i=0; i< num; i++) {
    const ran = (Math.random()*100).toFixed()
    arr.push(ran)
  }
  return arr
}
console.log(generateArray(10));

module.exports = generateArray;
