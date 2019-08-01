/**
 * 转为主体的时间
 * @param s
 */
function stringToDate(s) {
  const date = new Date(s);
  const year = date.getFullYear()
  const Mouth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const Day = date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate()
  const Hour = date.getHours()
  const Minutes = date.getMinutes()
  const Second = date.getSeconds() + 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()
  const ymd = `${year}-${Mouth}-${Day}`

  return {
    year,
    Mouth,
    Day,
    Hour,
    Minutes,
    Second,
    ymd
  }
}

// export default stringToDate;
console.log(stringToDate(1553500088264));
