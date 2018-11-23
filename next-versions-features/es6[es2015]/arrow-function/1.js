const obj = {
  a: 1
}

Object.defineProperty(obj, 'newB', {
  get() {
    return this.a + '123';
  }
})

