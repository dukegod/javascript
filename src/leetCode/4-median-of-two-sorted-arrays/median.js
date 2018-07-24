/**
 * created by liuhui
 */

var findMedianSortedArrays = function(nums1, nums2) {
  let combineArray = nums1;
  
  combineArray.push(...nums2);

  combineArray.sort(function(a, b) {
    return a - b;
  });

  console.log(combineArray);

  const len = combineArray.length;

  let str;

  if (!!len && len % 2 === 0) {
    str = (combineArray[len / 2] + combineArray[len/2 -1 ]) / 2;
  } else {
    str = combineArray[(len-1)/2]
  }
  return str;
}

const nums1 = [1, 4]
const nums2 = [5, 3]
const n11 = findMedianSortedArrays(nums1, nums2);
console.log(n11);

const nums3 = [1, 2]
const nums4 = [3]
const n22 = findMedianSortedArrays(nums3, nums4);
console.log(n22);
