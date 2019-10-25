/**
 * @description
 * @author hui
 * @date 2019-10-25
 */
function promiseFunc(e) {
  console.log(e);
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
  }, reject => {
    console.log(reject);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
