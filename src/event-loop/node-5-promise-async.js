const p = Promise.resolve(1)

const ta = async () => {
  await p;
  console.log(`after await`);
};
ta();


p.then(() => {console.log(`tick,a`)})
.then(() => {console.log(`tick,b`)})
