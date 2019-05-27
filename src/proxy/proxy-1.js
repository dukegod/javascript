let handler = {
  get() {
    return this
  }
}
let proxy = new Proxy({}, handler);
console.log(proxy.a)
console.log(proxy.a === handler);   // true
