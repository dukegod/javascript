/**
 * router
 * @param {*} request
 * @param {*} response
 */
const url = require('url');
const handleRouter = require('./handle');

const router = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  const method = request.method;
  const path = url.parse(request.url).pathname;
  console.log(path);
  if (method === 'GET') {
    switch (path) {
      case '/':
        handleRouter('./index.html', response);
        break;
      case '/favicon.ico':
        handleRouter('./favicon.ico', response);
        break;
      default:
        response.write(404);
    }
  }
};

module.exports = router;
