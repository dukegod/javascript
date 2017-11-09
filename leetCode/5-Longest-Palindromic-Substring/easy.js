/** 
 * 最简单的实现方式
 * 暴力遍历所有子串，复杂度O(n^3)
 */

function shrinkPalidrome(s, low, high) {
  let arr = s.split('');
  while (low <= high) {
    if (arr[low] === arr[high]) {
      low ++;
      high --;
    } else {
      return false;
    }
  }
  return true;
}


const longestPalindrome = (s) => {
  let size,
      low,
      high;
  for(size = s.length; size >0; size -- ) {
    for (low= 0, high = low+size-1; high < s.length; low ++, high ++){
      if (shrinkPalidrome(s, low, high)) {
        return s.substring(low, high+1)
      }
    }
  }
  return s.substring(0, 1)
}

const str =
  'jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyh' +
  'ixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavlj' +
  'pimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihx' +
  'rhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel';

const result = longestPalindrome(str);
console.log(result);