/**
 * Created by hui on 16/6/5.
 */

const fs = require('fs');
fs.appendFile('./lh.txt','append file',(err)=>{
  if(err) console.log('err333');
  console.log('ok');
})