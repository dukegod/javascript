
function isStringEmpty(params) {
  console.log( typeof params);
  console.log(params.length);
  console.log(params.length === 0);
  return params.trim().length === 0;
}


isStringEmpty('')
