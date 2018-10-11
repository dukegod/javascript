// 给出一个字符串，遇到数字n，则将前方字母输出n次
// 样例输入：abc3dd1zz2
// 样例输出：abcabcabcddzzzz
//  liuhui  2016-01-13 
function print(str){
    var string = "";
    var _str = "";
    var n = 0;
    for(var i = 0, len = str.length; i < len; i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            if(n == 0){
                _str += str[i];
            }else{
                for(var j = 0; j < n; j++){
                    string += _str;
                }
                n = 0;
                _str = str[i];
            }                    
        }else{
            n = n * 10 + parseInt(str[i]);
            if(i == len - 1){
                for(var j = 0; j < n; j++){
                    string += _str;
                }
            }
        }
    }
    return string;
}


console.log(print('aa3bb5zz6'));//aaaaaabbbbbbbbbbzzzzzzzzzzzz
console.log(print('3a5c6e'));//aaaaacccccc
console.log(print('ad13bc10'));//adadadadadadadadadadadadadbcbcbcbcbcbcbcbcbcbc
console.log(print('22222'));//空字符串
console.log(print('aaaaa'));//空字符串
