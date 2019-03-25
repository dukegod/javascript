/**
 * 转为主体的时间
 * @param s
 */
function stringToDate(s) {
  const date = new Date(s);
  return {
    year: date.getFullYear(),
    Mouth: date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    Day: date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate(),
    Hour: date.getHours(),
    Minutes: date.getMinutes(),
    Second: date.getSeconds() + 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
  };
}

export default stringToDate;
console.log(stringToDate(1553500088264));
