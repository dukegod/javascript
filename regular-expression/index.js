// 用户手机号码
export const PHONE_RGX = /^(1)\d{6}\d{4}$/
export const PHONE_RGX_ENCRYPTION = /^(1)\d{6}\d{4}$/

// 公用方法
export function regExpTest(rgx, target){
  return rgx.test(target)
}

// 脱敏处理
export function phoneEncryption(target){
  return target.toString().replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
}



