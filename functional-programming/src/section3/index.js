/***
 *
 * @param x
 * @returns {function(*): *}
 */
function add(x) {
  return function(y) {
    return x + y
  }
}
console.log(add(3)(4));

// es
const addEs = x => y => x + y
console.log(addEs(3)(4));
