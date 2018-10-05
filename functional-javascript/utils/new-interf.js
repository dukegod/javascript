"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personex = /** @class */ (function () {
    function Personex(address, name) {
        this.address = address;
        this.name = name;
    }
    Personex.prototype.showName = function () {
        console.log(this.name);
    };
    Personex.prototype.editName = function (name) {
        this.name = name;
    };
    return Personex;
}());
var per = new Personex('bj', '9');
console.log(per.showName());
per.editName('8989');
console.log(per.showName());
