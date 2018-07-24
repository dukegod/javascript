  function foo(){
      var local = 'private variable';
      return function(){
          return local;
      }
  }

  var getLocalVariable = foo();

  console.log(getLocalVariable);
  // getLocalVariable() // private variable

  console.log(getLocalVariable())