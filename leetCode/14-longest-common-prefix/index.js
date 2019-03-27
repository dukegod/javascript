/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {

  if (strs.length < 0) {
    return ''
  }

  let minLength;
  let len;
  let commandStrs;
  len = strs[0].length;
  commandStrs = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < len) {
      minLength = i;
      len = strs[i].length;
      commandStrs = strs[i];
    }
  }
  console.log(minLength, len, commandStrs);

  let i = 1;
  while (i <= len) {
    let str = commandStrs.slice(-len, i);
    console.log(str);
    if( strs.every(item => item.indexOf(str) !== -1)) {
      return str
    }
    i ++;
  }
  // console.log(99)
  return '99'
};


// const st = longestCommonPrefix(["flower","dddflow","flight", "fl333o"]);
const st2 = longestCommonPrefix(["ca","a"]);
// const st3 = longestCommonPrefix(["dog","racecar","car"]);
// console.log(st);
console.log(st2);
// console.log(st3);
