/**
 * 原生xhr请求
 * @param {*参数} opt 
 */ 
function xhrFunc(opt) {
  // console.log(opt)
  var defaults;
  var options;

  if (opt == null) {
    options = {};
  }
  defaults = {
    method: 'GET',
    data: null,
    url: '',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    async: true,
    username: null,
    password: null,
    withCredentials: false
  }

  options = Object.assign({}, defaults, opt);

  // console.log(options)

  var xhr = new XMLHttpRequest();

  xhr.onerror = function () {
    return {
      reason: 'error',
      status: 400,
      statusText: 'error'
    }
  };
  xhr.ontimeout = function () {
    return {
      reason: 'ontimeout',
      status: 500,
      statusText: 'ontimeout'
    }
  };
  xhr.onabort = function () {
    return {
      reason: 'onabort',
      status: 405,
      statusText: 'onabort'
    }
  };

  function appendQuery(url, query) {
    if (query == '') return url
    // return (url + '&' + query).replace(/[&?]{1,2}/, '?')
    let qs = '';
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        const element = query[key];
        console.log(key, element)
        qs += (key+'='+(element)+'&')
      }
    }
    return (url + '?' + encodeURI(qs.replace(/\&$/, '')))
    // return (url + '?' + encodeURI(query))
  }

  if (options.method === 'GET') {
    console.log(options.data)
    xhr.open(options.method, appendQuery(options.url, options.data), true);
  } else {
    xhr.open(options.method, options.url, true);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true
  }

  //  如果没有指定 content-type 默认为form提交
  //  针对post请求
  if ((options.data != null) && !options.headers['Content-Type']) {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  }

  for (const i in options.headers) {
    xhr.setRequestHeader(i, options.headers[i])
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // console.log(xhr.responseText)
      return xhr.responseText
    }
  }
  // console.log(options.data)
  xhr.send(options.data);
}
