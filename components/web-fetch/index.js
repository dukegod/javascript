import 'whatwg-fetch';
import 'es6-promise';
import querystring from 'querystring';


const fetchGet = ({
  url,
  params ={},
  headers ={}
})=>{

  const configs = Object.assign({
    method: 'get',
    credentials: 'include',
    mode: 'cors'
  }, headers);
  const urlToString = `${url}?${querystring.encodeURIComponent(params)}`;

  fetch(urlToString, configs).then(json => json.json())

}

const fetchPost = ({
  url,
  params ={},
  headers ={
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})=>{

  const configs = Object.assign({
    method: 'post',
    credentials: 'include',
    mode: 'cors',
  }, headers);
  const urlToString = `${url}`;
  configs.body = params;

  fetch(urlToString, configs).then(json => json.json())

}

export {
  fetchGet,
  fetchPost
}
