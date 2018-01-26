/**
 * Created by hui on 2018/1/9.
 */
function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}


console.log(param2Obj('http://preb2r.m.jd.com/#/detailffaaqq?apptoken=&uuid=&id=88&title=%E8%A3%85%E4%BF%AE%E6%9C%8D%E5%8A%A1'))

