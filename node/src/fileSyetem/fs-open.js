/**
 * Created by hui on 16/6/5.
 */

const fs = require('fs');

fs.open('./lh.txt','a+',(err,fd)=>{
  console.log(fd);
})