function main() {
  Promise.resolve(true)
    .then(() => {
      try {
        throw new Error('then');
      } catch (e) {
        console.log(`catch`);
        return e;
      }
    })
    .then(e => {
      console.log(`then`);
      console.log(e.message);
    });
}

main()
