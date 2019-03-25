/**
 * 防抖实践
 * @param fn 调用函数
 * @param time 延迟时间
 */
function debounce(fn, time) {
  const setTime = time;
  let innerFn;
  let timeout = null;
  innerFn = () => fn.apply(arguments);
  return function() {

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      innerFn();
    }, setTime);
  }
}
