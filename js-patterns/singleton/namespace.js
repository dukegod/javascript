/**
 * [nameSpace 命名空间管理变量]
 * @type {Object}
 */
var nameSpace = {
  name: 'Liuhui',
  showName: function(){
    console.log('name', this.name);
  },
  modifyName: function(name){
    this.name = name;
    this.showName(this.name);
  }
};

console.log(nameSpace.name);
nameSpace.showName();
nameSpace.modifyName('dukegod');
