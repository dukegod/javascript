/**
 * 返回对象的属性集合
 */
function objTraversal(myObject) {
  let s = '';
  let arr = [];
  for (let v in myObject) {
   // s = s + '\n '+ v + ':' + myObject[v] + '\n'; 
   // s = s + '......' + '\n';
   // s = s + myObject[v];
   console.log(myObject[v]);
   arr.push(v); 
  }
  console.log(arr);
  console.log(s);
}

module.exports = objTraversal;

