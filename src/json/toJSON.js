/**
 * Created by hui on 16/4/7.
 */
var jsObject = {
  name: 'john',
  address:'beijing',
  age: '80',
  child: [
    {
      name: 'sindy',
      address:'beijing2',
      age: '60',
      child: [
        {
          name: 'bob',
          address:'beijing3',
          age: '40',
          child: [
            {
              name: 'sany',
              address:'beijing4',
              age: '20'
            }
          ]
        }
      ]
    },
    {
      name: 'susan',
      address:'beijing5',
      age: '70'
    }
  ]
};

// 转化为json字符串
var json = JSON.stringify(jsObject);
console.log(json);

// 加上过滤器
var jsonFilter = JSON.stringify(jsObject,["age"]);
console.log(jsonFilter);
var jsonFilter2 = JSON.stringify(jsObject,["age","address"]);
console.log(jsonFilter2);

// 过滤器是函数的
var jsonFunc = JSON.stringify(jsObject,function(key , value){
  switch (key){
    case 'age':
      return 100;
    default:
      return value;
  }
})
console.log(jsonFunc);
// 加上缩进
var jsonIndent = JSON.stringify(jsObject,null,2);
console.log(jsonIndent)

