/**
 * server 服务器
 */
const Koa = require('koa');
const logger = require('koa-logger');
const server = require('koa-static');



const config = require('./config');
const h = require('./api');

const app = new Koa();

app.use(h);
app.use(logger());
app.use(server(__dirname + '/public'));

app.listen(config.port);
// module.exports = app;
