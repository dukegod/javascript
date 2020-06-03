
const { spawn } = require('child_process');


let arr, options;
arr = ['-lh','/Users/liuhui15/githubPro/node-basic/'];

options = {
  cwd: '/Users/liuhui15/githubPro/node-basic/',
  stdio: 'inherit',
  shell: true,
  // uid: 81245
};


const ls = spawn('ls',['-lh','/Users/liuhui15/githubPro/node-basic/']);

const grep = spawn('grep', ['typings']);
grep.stdout.setEncoding('utf8');


ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  grep.stdin.write(data);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  if (code !== 0){
    console.log(`child process exited with code ${code}`);
  }
  grep.stdin.end()
});

grep.stdout.on('data', (data) => {
  console.log(data);
});

grep.stderr.on('data', (data) => {
  console.log(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep 进程退出码：${code}`);
  }
});