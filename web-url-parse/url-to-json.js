/**
 * Created by hui on 2018/1/9.
 */
function param2Obj(url) {
  const search = url.split('?')[1];
  let json;
  if (!search) {
    return {}
  }
  json =JSON.parse('{"' + decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}');

  return json;
}


param2Obj('http://preb2r.m.jd.com/#/detailffaaqq?apptoken=uouo&uuid=oooo&id=88&title=刘辉同学的title')

// { apptoken: 'uouo', uuid: 'oooo', id: '88', title: '刘辉同学的title' }