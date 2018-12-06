

function RepeatInset(arr) {
  this.arr = arr;
}

const arr = [1,2,2,3,4,4,4,4,5,6,6,6,999];

const newArr = [... new Set(arr)];
console.log(newArr);


let obj = {}
newArr.forEach((val)=>{
  console.log(val)
  obj[val] = arr.lastIndexOf(val)
})
console.log(obj)






