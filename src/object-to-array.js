function objectToArray(obj) {
  return Object.entries(obj).map(([key, value]) => ({ [key]: value }));
}

const myObject = { a: 1, b: 2, c: 3 };
const myArray = objectToArray(myObject);
console.log(myArray);
