// 检测属性
//

var obj = {
  title: 'lh'
};

if('title' in obj){
  console.log(obj.title);
}

if(obj.hasOwnProperty('title')) {
  console.log(this);
}
