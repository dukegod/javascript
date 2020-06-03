const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');

/**
 * 实例化
 */
const app = express();
const accessLogFile = fs.createWriteStream(`${__dirname}/access.log`);
const errorLogFile = fs.createWriteStream(`${__dirname}/error.log`);

/**
 * log
 */
app.use(logger('combined', {
  stream: accessLogFile,
}));

/**
 * 加载静态资源
 */
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/log', (req, res, next) => {
  if (1) {
    const error = new Error('参数不对');
    console.log(error);
    error.status = '801';
    error.message = 'loglog'
    next(error);
  }
  res.send('ok');
  next();
});

app.get('/test', (req, res, next) => {
  // console.log(req);
  // console.log(req.headers);
  res.send({
    state: 'test',
  });
  // next();
});

app.get('/jsonp', (req, res, next) => {
  // console.log(req);
  // console.log(req.headers);
  res.jsonp({
    state: 'test',
  });
  // next();
});

app.post('/post', (req, res, next) => {
  // console.log(req);
  // console.log(req.headers);
  res.send({
    state: 'test',
  });
  next();
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // console.log(err);
  errorLogFile.write(err.stack)
  // render the error page
  res.status(err.status || 500);
  res.send('维护中......');
});

app.listen(3000);

