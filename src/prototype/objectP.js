/**
 * Created by hui on 16/3/24.
 */
'use strict';
var person = {
  name: 'liuhui',
  walk:function(){
    console.log(this);
    console.log(this.name);
    return 1; 
  }
};

var t = person.walk();
console.log(t);