class Ps {
  constructor() {
    this.queue = [];
  }
  on(fn) {
    this.queue.push(fn);
  }
  sub() {
    const queue = this.queue
    queue.map(fn => {
      fn.apply(this, arguments);
    })
  }
}

const ps = new Ps();
ps.listen(function (e) {
  console.log(e);
});
ps.listen(function (e) {
  console.log(e);
});

ps.public(2000)
