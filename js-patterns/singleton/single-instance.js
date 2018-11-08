/**
 * 封装多个函数的抽象方法
 * @param fn
 */
const singleIntance = function (fn) {
  let result;
  return function () {
    console.log(arguments)
    console.log(result)
    return result || (result = fn(...arguments));
  };
};

const createLoginLayer = function () {
  const div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};
const createSingleLoginLayer = singleIntance(createLoginLayer);
document.getElementById('loginBtn').onclick = function () {
  const loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};

var createSingleIframe = singleIntance(function () {
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  return iframe;
});
document.getElementById('loginBtn2').onclick = function () {
  var loginLayer = createSingleIframe();
  loginLayer.src = '#';
};
