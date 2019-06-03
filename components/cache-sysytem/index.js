
class CacheSystem {
  constructor() {
    const Store = localStorage.getItem('cacheSystem');
    if (!Store) {
      this.Store = {
        MaxSize: 1024 * 1024,
        currentSize: 0
      }
    } else {
      this.Store = JSON.parse(Store);

    }
  }

  now() {
    return new Date() * 1
  }

  has(key) {
    return this.Store.hasOwnProperty(key)
  }

  set(key, value, expire) {
    const val = {
      date: this.now(),
      key,
      value,
      expire
    }

    this.Store[key] = val;

    localStorage.setItem('cacheSystem', JSON.stringify(this.Store))
  }

  get(key) {
    const nowDate = this.now();
    if (!key || !this.has(key)) {
      return
    }

    // console.log(this.Store[key].expire + this.Store[key].date)
    // console.log(nowDate);
    if((this.Store[key].expire + this.Store[key].date) < nowDate) {
      // console.log('outdated');
      delete this.Store[key];
      localStorage.setItem('cacheSystem', JSON.stringify(this.Store))
      return
    }
    return this.Store[key]
  }
}
