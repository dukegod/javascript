var person = {
  name: ''
}
console.log( 'name' in person);
console.log(person.hasOwnProperty('name'));
console.log(Reflect.has(person, 'name'))
