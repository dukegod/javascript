const p = new Promise((resolve, reject) => {
  if (0) {
    reject('reject')
    // throw  new Error('throw')
  } else {
    resolve('resolve');
  }
})

p.then((a) => {
    console.log(`a,${a}`)
  }, (b) => {
    console.log(`b,${b}`)
  })
  .then(() => {
    console.log(`then1`);
    throw new Error('then1')
  })
  .then(() => {
    console.log(`then2`);
    throw new Error('then2')
  })
  .then(() => {
    console.log(`object--c`);
    return 90
  })
  .catch(e => {
    console.log(`e`);
    console.log(e)
  })
  .then((f) => {
    console.log(`f, ${f}`);
  })
