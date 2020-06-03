class Pointing {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // static instance
  static distance(a, b) {
    console.log(a, b)
  }

  showNum() {
    console.log('引用方法',this.x,this.y)
  }
}

module.exports = Pointing
