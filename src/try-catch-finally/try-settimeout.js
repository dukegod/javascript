function trySetTimeOut() {
  try {
    setTimeout(() => {
      throw new Error('setTimeOut');
    }, 10);
  } catch (e) {
    console.log(e);
  }
}

trySetTimeOut()
