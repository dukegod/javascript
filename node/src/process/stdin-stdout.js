process.memoryUsage();

process.stdin.resume();

process.stdin.on('data', (chunk) => {
  process.stdout.write(`data:--${chunk}`);
});


process.memoryUsage();
process.cwd();