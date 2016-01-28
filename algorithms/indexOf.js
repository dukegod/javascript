/*
*dukegod 
* 2016,1,28
* work out indexOf method by me 
*/

var findLocation = function(s1,s2){
  var l1 = s1.length,
      l2 = s2.length,
      i,
      k;

  for (i = 0; i < l1; i++) {
    // statement
    for(k= 0; k< l2; k++){
      //console.log(s1[i+k]);
      //console.log(s2[k]);
      //console.log(s1[i+k] == s2[k]);
      if (s1[i+k] != s2[k]) {
        // statement
        break;
      }else if(k == l2-1){
        //console.log(k == l2);
        //console.log(i);
        return i;
      }
    }
    return -1;
  }

}


var re = findLocation('abddsertyu','abd');
console.log(re);