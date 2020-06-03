// 遍历文件

const path = require('path')
const fs = require('fs')

const ROOTPATH = '/Users/liuhui15/githubPro/node-basic/router';
console.log(ROOTPATH)

// let filesTree = {}
async function iterateFiles(params) {
  let filesTree = {}

  const t = await new Promise(resolve => {
    fs.readdir(params, (err, files) => {
      if (err) return err;
      const t = files.map(ele => {
        const pathName = path.join(params, ele)
        // console.log(pathName);
        isDir(pathName)
        .then((re) => {
          if (re) {
            // console.log('direction',ele)
            // filesTree += ele
            filesTree = Object.assign(filesTree, {
              [ele] : []
            })

          } else {
            // console.log('file',ele)
            // filesTree += ele
            filesTree = Object.assign(filesTree, {
              [ele] : ''
            })
          }
          resolve(filesTree)
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
  })
  return t
}
const t = iterateFiles(ROOTPATH).then(re=>{
  console.log(re)
})



// 判断是不是文件夹
async function isDir(params) {
  const result = await new Promise((resolve, reject) => {
    fs.stat(params, (err, status) => {
      if (err) reject();
      resolve(status.isDirectory())
    })
  });
  return result;
}

// readDir(ROOTPATH)
// function readDir(path){
//   fs.readdir(path,(err,files)=>{
//     if(!files) return;
//     files.forEach((ele)=>{
//       const pathName = path +'/'+ ele;
//       let outObj = {}
//       fs.stat(pathName, (err,info)=>{
//         let obj = {}
//         if(info.isDirectory()){
//           // console.log(pathName)
//           // readDir(pathName);
//           Object.assign(obj, {
//             [ele]: []
//           })
//         }else{
//           // console.log("file: "+ele)
//           Object.assign(obj, {
//             [ele]: ele
//           })
//         }
//         console.log(obj)
//       })
//     })
//   })
// }
