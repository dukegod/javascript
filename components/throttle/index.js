/**
 * 节流处理
 * @param fn
 * @param time
 */
function throttle(fn, time) {
  const setTime = time;
  const innerFunc = () => fn.apply(arguments);
  let timerOut = null;
  let startTime = new Date() * 1;

  return function() {
    const innerTime = new Date() * 1;
    if (timerOut && innerTime - startTime > setTime) {
      startTime = innerTime;
      clearTimeout(timerOut)
    }
    timerOut = setTimeout(() => innerFunc(), setTime)
  }

}
