/*
* 解析url参数信息
* */

function getUrlParam(arr){
  if((typeof arr).toString().toLowerCase() ==='string'){
    arr = arr.split('/');
  }
  // 解析URL参数
  var urlParam = {};
  for(var i=0; i<arr.length; i++){
    var itm = arr[i];
    var index = itm.indexOf(':');
    if(index!==-1){
      var key = itm.substr(0,index);
      var value = itm.substr(index+1);
      urlParam[key] = value;
    }
  }
  return urlParam;
}

const arr = 'http://mdz.jd.com/customized/branches/index.php#wangLaoJiView/isPic:false/sku:26801786503/pid:1/taskId:/num:1/ispop:undefined/LID:1'

const re = getUrlParam(arr);

console.log(re)


// { http: '',
//   isPic: 'false',
//   sku: '26801786503',
//   pid: '1',
//   taskId: '',
//   num: '1',
//   ispop: 'undefined',
//   LID: '1'
// }