/**
 * Created by hui on 16/3/24.
 */
'use strict';
var person = {
  name : 'lh',
  age : '18',
  walk:function(){
    console.log(this.name + ';'+ this.age);
  } 
}

person.talk = function(){
  var that = this;
  console.log(this);
  var hh = function(name){
    console.log(that);
    that.name = name;
    console.log('name',that.name);
  };
  hh();
}

person.talk();
person.walk();
