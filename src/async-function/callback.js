function callbackFunc(cb) {
  setTimeout(() => {
    cb(200);
  }, 200);
}

callbackFunc(e => {
  console.log(e);
});
