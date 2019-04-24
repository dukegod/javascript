/**
 * 身份证组成： 省份（第一位非零，6位） + 出生年与（8）+ 随机码（3位）+ 校验码（1位）= 18位
 * @param s
 * @returns {boolean}
 */
function isCard(s) {
  const provice = {
  11: "北京",
  12: "天津",
  13: "河北",
  14: "山西",
  15: "内蒙古",
  21: "辽宁",
  22: "吉林",
  23: "黑龙江 ",
  31: "上海",
  32: "江苏",
  33: "浙江",
  34: "安徽",
  35: "福建",
  36: "江西",
  37: "山东",
  41: "河南",
  42: "湖北 ",
  43: "湖南",
  44: "广东",
  45: "广西",
  46: "海南",
  50: "重庆",
  51: "四川",
  52: "贵州",
  53: "云南",
  54: "西藏 ",
  61: "陕西",
  62: "甘肃",
  63: "青海",
  64: "宁夏",
  65: "新疆",
  71: "台湾",
  81: "香港",
  82: "澳门"
};

function birthdayVerify(val) {
  const year = val.substring(0, 4);
  const month = val.substring(4, 6);
  const date = val.substring(6, 8);
  const date2 = new Date(year + "-" + month + "-" + date);
  return !!(date2 && date2.getMonth() === (parseInt(month) - 1));

}

function provinceVerify(val) {
  const keys = Object.keys(provice);
  return keys.indexOf(val) !== -1;
}

  // 针对18位身份证
  const regex = /^[1-9]\d{5}(20|18|19)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9x]/gi;
  // 去除 '', null, undefined
  if (!s) {
    return false;
  }
  if (typeof s !== 'string') {
    return false;
  }
  // 不满足18位，或者格式不对者排除
  if (!regex.test(s)) {
    return false;
  }

  // 获取前两位，验证省份信息
  const pro = (/\d{2}/).exec(s)[0];
  if (!provinceVerify(pro)) {
    return false
  }
  // 验证身份信息
  const birthday = s.slice(6, 14);
  return birthdayVerify(birthday);

}

let s = isCard("12345620000229333x");
console.log(s);
