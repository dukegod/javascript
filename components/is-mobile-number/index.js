function isMobileNumber(s) {
  // 针对18位身份证
  const regex = /^[1]\d{10}/gi;
  // 去除 '', null, undefined
  if (!s) {
    return false;
  }
  if (typeof s !== 'string') {
    return false;
  }
  return regex.test(s);
}

let s = isMobileNumber("17790909090");
console.log(s);
