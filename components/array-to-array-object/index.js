/**
 * @description
 * @author hui
 * @date 2019-08-01
 */

function arrayToObject(params) {
  const array = params;
  return array.map(item => {
    return {
      id: item
    };
  });
}

console.log(arrayToObject([678, 889]))
