function main() {
  try {
    new Promise(() => {
      throw new Error('promise1 error');
    });
  } catch (e) {
    console.log(`catch block`);
    console.log(e.message);
  }
}

main();
