/**
 * 实现阻塞延迟
 * @param delay 延迟的时间
 */
function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

export default sleep;
