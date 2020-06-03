const Http = require('http');
const router = require('./libs/router');

Http.createServer(router).listen(9999);
