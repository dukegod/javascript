/**
 * @argument
 */
const { isTypeObject } = require('../type-detect/is_type');

const obj = {
  firstLable: 'name',
  secondLable: {
    name: 'secondLable',
    intNumber: 90,
    arr: [1,2,3,4],
    func: function(){},
    thirdLabel: {
      name: 'thirdlabel',
      obj:{},
      func: ()=>{return 3},
      arrThird: ['apple','banana']
    }
  },
};

function depthCopy(obj) {
  let result = {};
  for (let i in obj) {
    if ( isTypeObject(obj[i]) === 'object' ) {
      result[i] = depthCopy(obj[i])
    } else {
      result[i] = obj[i]
    }
  }
  return result
}

const robj = depthCopy(obj)
robj.secondLable.name = 'secondLable-modified';
console.log(obj);
console.log(robj);
console.log(robj.secondLable.thirdLabel.arrThird);

module.exports = depthCopy;

