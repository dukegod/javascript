const async = (e, callback) => {
  console.log('0000', e);
  setTimeout(() => {
    callback(e * 2);
  }, 1000);
};

async(1, (val) => {
  console.log('1111', val);
  async(val, () => {
    console.log('inner', val);
  });
});
