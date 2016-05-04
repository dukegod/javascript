/**
 * Created by hui on 16/5/3.
 */

var  arr = [1,2,3,4,5,6];

arr.forEach(function(v,i){
  "use strict";
  console.log('va' + v + ':' + 'i' + i);
});


[22,33].forEach(function(v,i,arr){
  "use strict";
  console.log(arr);
})
