/**
 * fork 主进程
 */

const { fork } = require('child_process');

const forked = fork('./fork-child.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' });