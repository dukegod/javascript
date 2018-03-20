const assert = require('assert');
const arrayReplaceArrayObject = require('../Array/arrayReplaceArrayObject')


const arr1 =
  [{
    "state": 4,
    "operator": "yongshuai",
    "created": 1453940494000,
    "modified": 1475042813000,
    "id": 16,
    "storeId": 76,
    "appAreaId": "57b708ce-1833-11e6-9000-12e0304ff9f5",
    "pin": "yongshuai",
    "salesManId": 17752,
    "shopName": "彭永帅",
    "shopCode": "JI-16",
    "businessArea": 2,
    "sales": 3,
    "checkoutCounter": 0,
    "qualificationType": 2,
    "qualificationNumber": "b46546546556",
    "shopType": 1,
    "bossId": 1,
    "lat": 38.10169,
    "lng": 114.51819,
    "geohash": "wwc2vbjw7jz9",
    "retailerType": 10,
    "retailerCorpType": -1,
    "shopOrigin": 1,
    "provinceId": 5,
    "cityId": 142,
    "countyId": 42545,
    "townId": 42588,
    "address": "聚合港物流园3002",
    "consignee": "彭永帅",
    "consigneeMobile": "17093122688",
    "bpin": "xtl_ABjMOLG"
  }, {
    "state": 4,
    "operator": "jd_4e54f5adcff28",
    "created": 1454547580000,
    "modified": 1477981515000,
    "id": 20,
    "storeId": 106,
    "appAreaId": "57b717cc-1833-11e6-9000-12e0304ff9f5",
    "pin": "jd_4e54f5adcff28",
    "salesManId": 17752,
    "shopName": "吉祥玉副食",
    "shopCode": "SC-20",
    "checkoutCounter": 0,
    "qualificationType": 1,
    "qualificationNumber": "510106601936967",
    "shopType": 0,
    "bossId": 5,
    "lat": 30.823854,
    "lng": 103.798212,
    "geohash": "wm3z3gr9cwue",
    "retailerType": 10,
    "retailerCorpType": -1,
    "shopOrigin": 1,
    "provinceId": 22,
    "cityId": 1930,
    "countyId": 49322,
    "townId": 49433,
    "address": "迎宾街46号（吉祥玉副食）",
    "consignee": "徐文君",
    "consigneeMobile": "13540107196",
    "bpin": "xtl_HesaRdt"
  }]
const arr2 = ['xtl_HesaRdt']  
console.log(arrayReplaceArrayObject)
describe('Array', () => {
  it('should return ok', () => {
    arrayReplaceArrayObject(arr1, arr2)[1].selected = true
  })
})