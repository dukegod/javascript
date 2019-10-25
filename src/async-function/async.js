const waitFor = (params, ms) => new Promise(r => setTimeout(r(`${params}r`), ms));

const arr = [1, 2, 3];

async function asyncForeach(array) {
  const resultArray = [];
  array.forEach(async item => {
    const result = await waitFor(item, 50);
    // console.log(result);
    resultArray.push(result);
  });
  return resultArray;
}

async function asyncMethod(arr1) {
  const re = await asyncForeach(arr1);
  // console.log(re);
  return re;
}

const st = asyncMethod(arr);
console.log(st);

