const https = require('http');
const fs = require('fs');

function saveImg() {
  return new Promise((resolve, reject) => {
    https.get('http://img.ivsky.com/img/bizhi/pre/201709/01/detomaso-002.jpg', (res) => {
      // 设置文件类型
      res.setEncoding('binary');
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
        // console.log(rawData)
      });
      res.on('end', () => {
        try {
          resolve(rawData);
        } catch (e) {
          reject(e.message);
        }
      });
    });
  });
}

saveImg().then((re) => {
  console.log(re.length)
  fs.writeFileSync('avatar1.jpg', re, 'binary', (err) => {
    if (err) {
      console.log(err);
    };
    console.log('保存文件成功')  
  });
});
