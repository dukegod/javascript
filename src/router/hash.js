/**
 * hash 路由配置
 */
class HashRouter {
  constructor(opt = {
    mode: 'hash',
    routers: {},
    currentUrl: ''
  }) {
    this.mode = opt.mode;
    this.routers = opt.routers;
    this.currentUrl = opt.currentUrl;
    this.$win = window;
    this.$location = window.location;
    this.init();
  }

  /**
   * 初始化参数
   */
  init() {
    this.$win.addEventListener('load', () => {
      console.log(`mode: ${this.mode}`);
      this.refresh();
    });
    this.$win.addEventListener('hashchange', () => {
      this.refresh();
    });
  }
  /**
   * 参数解析为 json对象
   * @param parameter
   */
  parameterToJson(parameter) {
    if (!parameter || parameter === '' || parameter.indexOf('?') === -1) return {};
    const strs = parameter.split('?')[1].replace(/=/g, ':').replace(/&/g, ',');
    const res = {};
    for (let i = 0; i < strs.split(',').length; i++) {
      let x = strs.split(',')[i].split(':');
      res[x[0]] = x[1];
    }
    return JSON.stringify(res);
  }

  /**
   * 动态记录浏览记录,  直接赋值到location.hash
   * @param {*} path 传入的路径
   * @param {*} cb callback
   */
  push(path, cb) {
    this.currentUrl = path;
    this.routers[path] = cb || {};
    this.$location.hash = `#${path}`;
  }

  /**
   * 浏览器不记录浏览记录
   * @param path 传入的路径
   * @param cb callback
   */
  replace(path, cb) {
    this.routers[path] = cb || {};
    this.currentUrl = this.$location.hash.slice(1) || '/';
    this.$location.replace(`#${path}`);
  }
  /**
   * 浏览器刷新的记录方案
   */
  refresh() {
    this.currentUrl = this.$location.hash.slice(1) || '/';
    this.push(this.currentUrl);
  }
}


