/**
 * Created by hui on 16/6/3.
 * 
 * unlink 删除文件
 * 
 * 推荐异步删除一个文件
 */

const fs = require('fs');
fs.rename('./duke.txt','./lh.txt',function(err){
  if (err){
    console.log('err');
  }else {
    console.log('ok');
    fs.stat('./lh.txt',(err,stats)=>{
      if (err) {
        console.log(err);
      }
      console.log(stats);
    });
  }
});
