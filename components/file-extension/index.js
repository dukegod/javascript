/**
 * 获取文件后缀
 * @param params
 */

function fileExtension(params) {
  // console.log(params.match(/\.\w+$/));
  return params ? params.match(/\.\w+$/) : '';
}

fileExtension('reewww.wwwr...msg');
