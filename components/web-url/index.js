
function strToJson(s) {
  if (!s || s === '') return {};
  let params = decodeURIComponent(s).split('?')[1];
  params = params.replace(/"/gi, '');
  params = params.replace(/=/gi, '":"');
  params = params.replace(/&/gi, '"},{"');
  params = `[{"${params}"}]`;
  params = JSON.parse(params);
  const obj = {};
  for (let i = 0; i < params.length; i++) {
    const key = Object.keys(params[i])[0];
    const value = Object.values(params[i])[0];
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'string') {
        obj[key] = new Array(obj[key]);
      } else {
        obj[key] = [...obj[key], value]
      }
    } else {
      obj[key] = value
    }
  }
  return obj;
}

export default strToJson



