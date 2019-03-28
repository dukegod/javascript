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
    return "";
  }

  let minLength;
  let len;
  len = strs[0].length;
  // 通过循环遍历出最小的长度
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < len) {
      minLength = i;
      len = strs[i].length;
    }
  }
  // console.log(minLength, len, commandStrs);

  let ans = "";
  for (let i = 0; i < len; i++) {
    const a = strs[0][i];
    let f = strs.every(function(item) {
      return item[i] === a;
    });

    if (!f) break;
    ans += a;
  }

  return ans;

};


const st = longestCommonPrefix(["flower","flow","flight", "fl333o"]);
// const st2 = longestCommonPrefix(["caa", "aa"]);
// const st3 = longestCommonPrefix(["dog","racecar","car"]);
console.log(st);
// console.log(st2);
// console.log(st3);
