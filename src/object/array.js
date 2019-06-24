function add(arr,num){
  console.log(arr)
  let arr2 = arr
  for(var i=0; i<arr.length; i++){
      arr2[i]+= num;
  }
}
var arr1 =[1,2,3,4,5];
add(arr1,5);
console.log(arr1);//[6, 7, 8, 9, 10]
