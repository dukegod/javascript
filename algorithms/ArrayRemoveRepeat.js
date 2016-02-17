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
