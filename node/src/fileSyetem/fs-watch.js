/**
 * Created by hui on 16/6/5.
 */

const  fs = require('fs');

fs.watch('./tfile',
  {encodeing : 'buffer'},
  (event,filename)=>{
    if (filename){
      console.log(filename);
    }
})