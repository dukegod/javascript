"use strict";
// 判断一个类型是不是为真
Object.defineProperty(exports, "__esModule", { value: true });
var exist_1 = require("./exist");
function truthy(x) {
    return x !== false && exist_1.existy(x);
}
exports.truthy = truthy;
