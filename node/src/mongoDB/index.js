/**
 * 本地数据看连接
 */
const mongoose = require('mongoose');
const http = require('http');

const promise = mongoose.connect('mongodb://127.0.0.1:27017/testDB', {
  useMongoClient: true,
});
promise.then((e)=>{
  console.log('ok')
}, (err)=>{
  console.log(err)
})


const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{
    body: String,
    date: Date,
  }],
  hidden: Boolean,
});

const Blog = mongoose.model('Blog', blogSchema);

const blog = new Blog(
  {
    title: 'test1',
    author: 'ts',
    body: 'just do it',
    comments: [{
      body: 'ctms',
      data: '20170926',
    }],
    hidden: false,
  },
);

blog.save();

Blog.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html,charset=uft8');
  res.setHeader('Date', new Date().toUTCString);
  const expaireDate = new Date('2017/12/12').toUTCString;
  res.setHeader('Expires', expaireDate);
  res.setHeader('Cache-Control', 'private');
  res.setHeader('Set-Cookie', `auto type cookie; expires=${expaireDate}`);
  res.write('kittens');
  res.end();

}).listen(3000, () => {
  console.log('监听3000端口');
});

