const fetchFailure = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // 模拟请求
    // eslint-disable-next-line prefer-promise-reject-errors
    if (1) reject('fetch failure...');
  });
});

async function main() {
  try {
    const res = await fetchFailure();
    console.log(res, 'res');
  } catch (e) {
    console.log(e, 'e.message');
  }
}

main();
