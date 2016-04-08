// 递归样式
// 遍历一个js对象中的name,查询所有的数值
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
var names = [];  //where we will store the names
function findName (obj) {    
    names.push(obj.name);  //get the current person's name
    if(obj.child) obj.child.forEach(findName);  //if we have a child, loop over them
}
findName(json);
console.log(names);









