/*
* dukegod 
* 2016,1,28
* 判断另一个字符串首次出现的位置
*/
"use strict";
var findLocation = function(s1,s2){
  var l1 = s1.length,
      l2 = s2.length,
      i,
      k;

  for (i = 0; i < l1; i++) {
    // statement
    for(k= 0; k< l2; k++){
      console.log(s1[i+k]);
      console.log(s2[k]);
      console.log(s1[i+k] == s2[k]);
      if (s1[i+k] != s2[k]) {
        // statement
        console.log(111);
        break;
      }else if(k === l2-1 ){
        console.log('success-----',k);
        return i;
      }else{
        console.log(222);
      }
    }
  }
  return -1;
}

var re = findLocation('abddsertyu','yu');
console.log('re----',re);