function doSomething() {
  return new Promise((resolver, reject) => {
    setTimeout(()=> {
      console.log('doSomethingdoSomething');
      resolver(40);
    }, 1000);
  });
};

function doSomethingElse (argument) {
  // body...
  console.log('doSomethingElse');
}


doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
