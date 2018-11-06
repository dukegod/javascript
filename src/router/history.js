/**
 * 通过history api实现单页面前端路由
 */
class HistoryRouter {
  constructor(opt = {
    mode: 'history',
    routers: {},
    currentUrl: '/'
  }) {
    this.mode = opt.mode;
    this.routers = opt.routers;
    this.currentUrl = opt.currentUrl;
    this.$win = window;
    this.$history = window.history;
    this.init();
  }

  /**
   * 初始化函数
   */
  init() {
    console.log(`mode: ${this.mode}`);
    this.$win.addEventListener('popstate', function(event) {
      // this.refresh()
      console.log('触发了popstate事件', JSON.stringify(event.state))
    }.bind(this), false)
  }

  /**
   * 添加历史记录
   * @param path
   * @param cb
   */
  push(path, cb) {
    this.routers[path] = cb || {};
    this.currentUrl = path;
    this.$history.pushState({}, 'push', path)
    console.log(this.routers)
  }

  /**
   * 修改历史记录
   * @param path
   * @param cb
   */
  replace(path, cb) {
    const pathname = this.$win.location.pathname;
    this.currentUrl = path;
    this.routers[path] = cb;
    this.$history.replaceState({}, 'replace', pathname + path)
    console.log(this.routers)
  }

  /**
   * 刷新浏览器
   */
  refresh() {
    const pathname = this.$win.location.pathname;
    console.log( pathname + this.$win.location.search)
    // debugger
    this.$win.location.href = pathname + this.$win.location.search;
    console.log(this.routers)
  }

}
