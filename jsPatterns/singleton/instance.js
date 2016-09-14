var Singleton = (function() {
  var _instance = null;

  function Single() {
    return {
      name: 'Liuhui',
      showName: function() {
        console.log(this.name);
      },
      modifyName: function(name) {
        this.name = name;
        this.showName(this.name);
      }
    };
  }

  //  返回的函数自动执行，直接返回了属性与方法
  return (function() {
    if (!_instance) {
      _instance = Single();
    }

    return _instance;
  })();
})();

console.log(Singleton); // { name: 'Liuhui', showName: [Function], modifyName: [Function] }
console.log(Singleton.name);
Singleton.showName();
Singleton.modifyName('dukegod');
