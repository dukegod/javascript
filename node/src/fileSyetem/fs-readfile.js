/**
 * Created by hui on 16/6/5.
 */
const fs = require('fs');

fs.readFile('./lh.txt','utf8',(err,data)=>{
  if (err){
    console.log(err)
  }
  console.log(data);
})