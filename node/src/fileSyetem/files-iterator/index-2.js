// 遍历文件

const path = require('path')
const fs = require('fs')

const ROOTPATH = '/Users/liuhui15/githubPro/node-basic/router';
// console.log(ROOTPATH)

let outfile = {}

function iterateFiles(params) {
  fs.readdir(params, (err, files) => {

    if (err) return err;
    files.forEach(ele => {
      const pathName = path.join(params, ele)
      isDir(pathName)
      .then(re => {
        let inner = re;

        for(let[key ,val] of Object.entries(inner)){
          if (typeof val === 'object') {
            inner[key] = iterateFiles(key)
          } else {
            inner[key] = val
          }
        }
        Object.assign(outfile, inner)
        console.log(outfile)
      })
    })
  })
}
iterateFiles(ROOTPATH)

// 判断是不是文件夹
async function isDir(params) {
  const result = await new Promise((resolve, reject) => {
    let fileTree = {}
    fs.stat(params, (err, status) => {
      if (err) reject();
      // resolve(status.isDirectory())
      if (status.isDirectory()) {
        Object.assign(fileTree, {
          [params]: []
        })
      } else {
        Object.assign(fileTree, {
          [params]: params
        })
      }
      // console.log(fileTree)
      resolve(fileTree)
    })
  });
  return result;
}









