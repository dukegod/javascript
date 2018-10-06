function identity<T>(arg: T): T {
  return arg;
}

// exp
const idy = identity('string');
console.log(idy);

const idyint = identity<number>(90);
console.log(idyint);

const idarray = identity<[]>([]);
console.log(idarray)

interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity: GenericIdentityFn = identity;
const mystring = myIdentity('string')
console.log(mystring)

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(8,9))
