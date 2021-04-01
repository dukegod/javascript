/**
 * @description
 * @author hui
 * @date 2019-10-25
 */
function promiseFunc() {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(200);
      }, 200);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(404);
    }
  });
}

promiseFunc()
  .then(resolve => {
    console.log(resolve);
    Promise.reject('90')
    throw '9999'
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
