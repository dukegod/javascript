/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
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

  // console.log(len, minLength, commandStrs);
  while (len) {
    let str = commandStrs.slice(0, len);
    // console.log(str);
    if( strs.every(item => item.indexOf(str) !== -1)) {
      return str
    }
    len --;
  }

};


longestCommonPrefix(["flower","flow","flight", "flo"]);
