// 递归样式
//  未解决
'use strict';
var json={
  name: 'john',
  age: '80',
  child: [
    {
      name: 'sindy',
      age: '60',
      child: [
        {
          name: 'bob',
          age: '40',
          child: [
            {
              name: 'sany',
              age: '20'
            }
          ]
        }
      ]
    },
    {
      name: 'susan',
      age: '70'
    }
  ]
}            
// zhuan hua wei json 
var stringjson = JSON.stringify(json,['name']);
console.log(stringjson);


var names = [];  //where we will store the names
function findName (obj) {    
    names.push(obj.name);  //get the current person's name
    if(obj.child) obj.child.forEach(findName);  //if we have a child, loop over them
}
findName(json);
console.log(names);


// json 数据
//js筛选json数据 

var foo = [{
    "cid": "1",
    "name": "图书",
    "pid": "0",
    "type": "1"
  }, {
    "cid": "2",
    "name": "音像",
    "pid": "0",
    "type": "1"
  }, {
    "cid": "3",
    "name": "电子书",
    "pid": "0",
    "type": "1"
  }, {
    "cid": "4",
    "name": "家用电器",
    "pid": "0",
    "type": "2"
  }]
  // 可以用来把type类型数组输出
var jsontext = JSON.stringify(foo, ["type"]);
console.log(jsontext);

var l = foo.length;
var arr4 = [];
for (var i = 0; i < l; i++) {
  if (foo[i].type == '1') {
    console.log(foo[i]);
    arr4[i] = foo[i];
    console.log(arr4[i]);
  }

};
// 利用underscore.js 输出
var ud = _.filter(foo, function(e) {
  if (e.type == '1') {
    console.log(e);
  };
});









