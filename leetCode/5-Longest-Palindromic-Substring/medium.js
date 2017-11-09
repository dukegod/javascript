/**
 * Created by hui on 2017/11/9.
 * 从中心点向外扩散，复杂度O(n^2)
 */
const longestPalindrome = s => {
  let max = 0;
  let res = '';

  if (s.length === 1) {
    return s;
  }
  for (let i = 0; i < s.length - 1; i++) {

    checkPalindromeExpand(s, i, i);
    checkPalindromeExpand(s, i, i + 1);
  }
  return res;

  function checkPalindromeExpand(s, low, high) {
    const arr = s.split('');
    while (low >= 0 && high < s.length) {
      if (arr[low] === arr[high]) {
        if (high - low + 1 > max) {
          max = high - low + 1;
          res = s.substring(low, high + 1);
        }
        low--;
        high++;
      } else {
        return;
      }
    }
  }
};

const str = 'bccccb';
// const str =
//   'jglknendplocymmvwtoxvebkekzfdhykknufq' +
//   'dkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyh' +
//   'ixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhz' +
//   'jvbflxgcovilthvuihzttzithnsqbdxtafxrfr' +
//   'blulsakrahulwthhbjcslceewxfxtavlj' +
//   'pimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfe' +
//   'usgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihx' +
//   'rhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihi' +
//   'fxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel';

const result = longestPalindrome(str);
console.log(result);
