//
//数组去除重复内容
//
Array.prototype.unique = function() {
	var json = {};
	var res = [];
	for(var i = 0;i < this.length;i++) {
		if(!json[this[i]]) {
			res.push(this[i]);
			json[this[i]] = true;
		}
	}
	console.log(json);//{ '0': true, '1': true, '2': true, '3': true, '4': true, '7': true }
	return res;
}

var a = [1,2,3,3,2,1,4,4,0,7,7,7,7,7];
console.log(a.unique());


//指定的值找坐标
Array.prototype.valueIndexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
//删除指定的值
Array.prototype.removeValue = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

 /*
   * 数组去重
   */
function unique(arr) {
  var result = [],
    hash = {};
  for (var i = 0, elem;
    (elem = arr[i]) != null; i++) {
    if (!hash[elem]) {
      result.push(elem);
      hash[elem] = true;
    }
  }
  return result;
}

