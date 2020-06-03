
const { spawn } = require('child_process');

const childCount = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
  cwd: '/Users/liuhui15/Downloads'
});

const child = spawn('ls',['-lh'], {
  stdio: 'inherit',
  shell: true,
  cwd: '/Users/liuhui15/Downloads'
});

const childEnv = spawn('echo $ANSWER', {
  stdio: 'inherit',
  shell: true,
  env: { ANSWER: 42 },
});