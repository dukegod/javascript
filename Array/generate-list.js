/**
 * 实现一个列表
 * @param {*} params 
 */

function Genelist() {
  this.listSize = 0;
  this.pos = 0;
  this.newArray = [];
  this.length = this.newArray.length;
}

Genelist.prototype.clear = () => {
  this.listSize = 0;
  this.length = 0;
  this.newArray = [];
};

Genelist.prototype.add = (val) => {
  this.listSize += 1;
  this.newArray[this.listSize] = val;
};

Genelist.prototype.find = (val) => {
  for (let i = 0; i < this.length; i++) {
    if (this.newArray[i] === val) {
      return i;
    }
  }
  return -1;
};

Genelist.prototype.remove = (val) => {
  const index = this.find(val);
  if (index > -1) {
    this.newArray = this.newArray.splice(index, 1);
    this.listSize -= 1;
    return true;
  }
  return false;
};

Genelist.prototype.insert = (beforeElement, val) => {
  const index = this.find(beforeElement);
  if (index > -1) {
    this.newArray.splice(index+1, 0, val);
    this.listSize ++;
    return true;
  }
  return false;
};

