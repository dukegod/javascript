// 判断一个类型是不是为真

import {existy} from "./exist";
export function truthy(x:any): boolean {
  return x!== false && existy(x);
}
