const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
// querystring.stringify
module.exports = function ft() {
  const postData = {
    'kind': 'trending',
    'genre': 'soundcloud:genres:all-music',
    'region': 'soundcloud:regions:US',
    'high_tier_only': 'false',
    'client_id': 'nviGqqUJ1aoaFVSMA7EdLE3IZJLwYFKU',
    'limit': 20,
    'offset': 0,
    'linked_partitioning': 1,
    'app_version': 1505466707,
  };
  const options = {
    hostname: 'api-v2.soundcloud.com',
    Origin: 'https://soundcloud.com',
    Pragma: 'no-cache',
    Referer: 'https://soundcloud.com/',
    path: '/charts',
    port: 443,
    method: 'GET',
    // key: fs.readFileSync('./private.pem'),
    // ca: [fs.readFileSync('./private.pem')],
    // cert: fs.readFileSync('./private.pem'),
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,zh-TW;q=0.2',
      'Authorization': 'OAuth 2-274121-176613350-tH57YxY6Yf1h8o',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  };
  const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    let dd = '';
    res.setEncoding('utf8');
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
      dd += chunk;
    });
    res.on('end', () => {
      console.log('No more data in response.');
      console.log(dd);
    });
  });
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    req.end('error');
  });
  // write data to request body
  console.log(postData);
  // req.write(postData);
  req.write(JSON.stringify(postData));
  req.end('ok');
}