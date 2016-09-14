/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {

// };

const twoSum = (nums, target) => {
  // get value array that may be work
  let validIndex = nums;
  let l = validIndex.length;
  let vi;
  let vj;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l && j !== i; j++) {
      if (validIndex[i] + validIndex[j] === target) {
        vj = validIndex[j];
        vi = validIndex[i];
      }
    }
  }
  // console.log(vj);
  // console.log('vi',vi);
  let numIndex = [];
  nums.forEach(function(ele, index) {
    // statements
    if (ele === vj) {
      numIndex.push(index);
    }
    if (ele === vi) {
      numIndex.push(index);
    }
  });

  // work out the repeat array
  Array.prototype.unique = function() {
    var json = {};
    var res = [];
    for (var i = 0; i < this.length; i++) {
      if (!json[this[i]]) {
        res.push(this[i]);
        json[this[i]] = true;
      }
    }
    return res;
  }
  console.log(numIndex.unique());
  return numIndex.unique();
}

let nums = [-3,4,3,90]
twoSum(nums, 0);
// console.log(nums);
