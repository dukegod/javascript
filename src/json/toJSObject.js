/**
 * Created by hui on 16/4/7.
 */
var foo = [{
  "cid": "1",
  "name": "图书",
  "pid": "0",
  "type": "1"
}, {
  "cid": "2",
  "name": "音像",
  "pid": "0",
  "type": "1"
}, {
  "cid": "3",
  "name": "电子书",
  "pid": "0",
  "type": "1"
}, {
  "cid": "4",
  "name": "家用电器",
  "pid": "0",
  "type": "2"
}]

var foojson = JSON.stringify(foo,null,2);
console.log(foojson);

var parse = JSON.parse(foojson);
console.log(parse);