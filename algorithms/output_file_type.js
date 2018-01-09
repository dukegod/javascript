// 输出文件的后缀名字
// 2016-01-12 20:59:45

var out_file_type = function(e){
	var point = e.split('.');
	return point[point.length - 1];
}

console.log(out_file_type('index.js')); //js 
console.log(out_file_type('index.html')); //html 
console.log(out_file_type('index.html.js')); //js 


